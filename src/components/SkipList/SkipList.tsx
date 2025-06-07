import React from "react";
import SkipCard from "../SkipCard/SkipCard";
import SkipCardSkeleton from "../SkeletonCard/SkeletonCard";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import type { ISkip } from "../../interfaces/skip";

interface SkipListProps {
  data: ISkip[] | undefined;
  isLoading: boolean;
  isError: boolean;
  selectedId: number | null;
  onSelect: (id: number) => void;
}

const SkipList: React.FC<SkipListProps> = ({ data, isLoading, isError, selectedId, onSelect }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, idx) => (
          <SkipCardSkeleton key={idx} />
        ))}
      </div>
    );
  }

  if (isError) {
    return <ErrorMessage message="Failed to load skips. Please try again later." />;
  }

  if (data?.length === 0) {
    return <p>No skips found for this location.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.map((skip) => (
        <SkipCard
          key={skip.id}
          skip={skip}
          selected={selectedId === skip.id}
          onSelect={() => onSelect(skip.id)}
        />
      ))}
    </div>
  );
};

export default SkipList;
