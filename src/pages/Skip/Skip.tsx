import React, { useState, useMemo } from "react";
import { useSkips } from "../../hooks/useSkips";
import CheckoutSteps from "../../components/CheckoutSteps/CheckoutSteps";
import SkipList from "../../components/SkipList/SkipList";
import SkipConfirmation from "../../components/CheckoutConfirmation/CheckoutConfirmation";
import type { ISkip } from "../../interfaces/skip";

const SkipsPage: React.FC = () => {
  const postcode = "NR32";
  const area = "Lowestoft";
  const { data, isLoading, isError } = useSkips({ postcode, area });
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const selectedSkip = data?.find((skip: ISkip) => skip.id === selectedId) || null;
  const currentStep = 3;

  const sortedData = useMemo(() => {
    if (!data) return [];

    return [...data].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price_before_vat - b.price_before_vat;
      } else {
        return b.price_before_vat - a.price_before_vat;
      }
    });
  }, [data, sortOrder]);

  return (
    <div className="p-4 md:px-[8rem] relative">
      <div className="flex flex-col lg:flex-row gap-6 relative">
        <div className="lg:w-1/4 order-1 lg:order-2">
          <div className="lg:sticky lg:top-20 flex flex-col gap-4">
            <div className="block lg:hidden">
              <CheckoutSteps currentStep={currentStep} />
            </div>

            <div className="block lg:hidden">
              {selectedSkip && (
                <div className="fixed bottom-0 left-0 right-0 z-50 p-4 shadow-md">
                  <SkipConfirmation
                    skip={selectedSkip}
                    onBack={() => setSelectedId(null)}
                  />
                </div>
              )}
            </div>

            <div className="hidden lg:block">
              <CheckoutSteps currentStep={currentStep} />

              {selectedSkip && (
                <div className="mt-4">
                  <SkipConfirmation
                    skip={selectedSkip}
                    onBack={() => setSelectedId(null)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="lg:w-3/4 order-2 lg:order-1">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-md md:text-lg md:text-2xl dark:text-gray-300 font-bold">
              Choose Your Skip Size
            </h1>

            <div className="flex items-center gap-1 md:gap-2">
              <label
                htmlFor="sortOrder"
                className="text-sm font-medium dark:text-gray-300"
              >
                Price:
              </label>
              <select
                id="sortOrder"
                value={sortOrder}
                onChange={(e) =>
                  setSortOrder(e.target.value as "asc" | "desc")
                }
                className="border rounded px-2 py-1 text-sm dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-700"
              >
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
            </div>
          </div>

          <SkipList
            data={sortedData}
            isLoading={isLoading}
            isError={isError}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>
      </div>
    </div>
  );
};

export default SkipsPage;
