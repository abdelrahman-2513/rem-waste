const SkipCardSkeleton = () => {
    return (
      <div className="animate-pulse border border-gray-300 dark:border-gray-700 rounded-md p-4 bg-white dark:bg-gray-800 text-black dark:text-white shadow-card space-y-4">
        <div className="h-40 rounded-md bg-gray-300 dark:bg-gray-700 w-full" />
  
        <div className="w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-700 mx-auto -mt-8 shadow-md" />
  
        <div className="flex justify-between px-2">
          <div className="h-4 w-12 rounded bg-gray-200 dark:bg-gray-600" />
          <div className="h-5 w-16 rounded bg-gray-200 dark:bg-gray-600" />
        </div>
  
        <div className="flex justify-between px-2">
          <div className="h-5 w-5 rounded bg-gray-200 dark:bg-gray-600" />
          <div className="h-5 w-5 rounded bg-gray-200 dark:bg-gray-600" />
        </div>
      </div>
    );
  };
  
  export default SkipCardSkeleton;
  