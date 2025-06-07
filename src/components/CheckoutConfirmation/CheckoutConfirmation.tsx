import React from "react";
import type { ISkip } from "../../interfaces/skip";

interface SkipConfirmationProps {
  skip: ISkip;
  onBack: () => void;
  onContinue?: () => void;
}

const cubicMeterToYard = (m3: number) => Math.round(m3 * 1.30795);

const SkipConfirmation: React.FC<SkipConfirmationProps> = ({ skip, onBack, onContinue }) => {
  const yardSize = cubicMeterToYard(skip.size);

  return (
    <div className="mt-6  border border-gray-200 dark:border-gray-700 rounded-lg  p-4 bg-gray-50 dark:bg-gray-900 text-sm text-gray-700 dark:text-gray-300 shadow-lg">
      <p className="mb-3">
        Imagery and information shown throughout this website may not reflect the exact shape or size specification,
        colours may vary, options and/or accessories may be featured at additional cost.
      </p>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="font-semibold text-base">{yardSize} Yard Skip</div>
        <div className="text-priceBlue font-bold">
          £{skip.price_before_vat} – {skip.hire_period_days} day hire
        </div>
        <div className="flex gap-2 ml-auto">
          <button
            onClick={onBack}
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-sm px-4 py-1 rounded"
          >
            Back
          </button>
          <button
            onClick={onContinue}
            className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-1 rounded"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkipConfirmation;
