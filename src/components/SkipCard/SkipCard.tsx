import React from "react";
import type { ISkip } from "../../interfaces/skip";
import {
  FiCalendar,
  FiTag,
  FiTruck,
  FiTrash2,
} from "react-icons/fi";
import { motion } from "framer-motion";

interface SkipCardProps {
  skip: ISkip;
  selected?: boolean;
  onSelect?: () => void;
}

const cubicMeterToYard = (m3: number) => Math.round(m3 * 1.30795);

const SkipCard: React.FC<SkipCardProps> = ({
  skip,
  selected = false,
  onSelect,
}) => {
  const yardSize = cubicMeterToYard(skip.size);
  const yardImage = [4, 5, 6, 8].includes(yardSize)
    ? `/yard-images/${yardSize}yard.jpg`
    : "/yard-images/default.jpg";

  return (
    <motion.div
      onClick={onSelect}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`border-2 rounded-lg p-4 bg-white dark:bg-gray-800 text-black dark:text-white shadow-md cursor-pointer transition-all
        ${selected ? "border-green-500" : "border-gray-300 dark:border-gray-700"}`}
    >
      <div className="relative w-full h-40 rounded-md overflow-hidden">
        <img
          src={yardImage}
          alt={`${yardSize} yard skip`}
          className={`w-full h-full object-cover transition-all duration-300 ${
            !skip.allowed_on_road ? "brightness-50" : ""
          }`}
        />
        
      </div>

      <div className="w-16 h-16 flex items-center justify-center text-black dark:text-white bg-primary dark:bg-secondary text-md font-bold rounded-full -mt-5 mb-2 mx-auto shadow-md">
        {yardSize} yd
      </div>

      <div className="flex items-center justify-between mt-4 text-sm text-gray-700 dark:text-gray-300">
        <div className="flex items-center gap-1">
          <FiCalendar />
          <span>{skip.hire_period_days}d</span>
        </div>
        <div className="flex items-center gap-1 text-priceBlue text-xl font-bold">
          <FiTag />
          <span>£{skip.price_before_vat}</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-4 text-sm">
        <div
          className={`flex items-center gap-1 ${
            skip.allowed_on_road
              ? "text-green-600 dark:text-green-400"
              : "text-red-500 line-through opacity-70"
          }`}
        >
          <FiTruck />
          <span className=" sm:inline">On-road</span>
        </div>

        <div
          className={`flex items-center gap-1 ${
            skip.allows_heavy_waste
              ? "text-green-600 dark:text-green-400"
              : "text-red-500 line-through opacity-70"
          }`}
        >
          <FiTrash2 />
          <span className=" sm:inline">Heavy waste</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SkipCard;
