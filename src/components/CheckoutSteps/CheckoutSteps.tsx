import React from "react";
import {
  FaMapMarkerAlt,
  FaTrash,
  FaTruck,
  FaCalendarAlt,
  FaCreditCard,
  FaCheckCircle,
} from "react-icons/fa";

interface CheckoutStepsProps {
  currentStep: number;
}

const steps = [
  { id: 1, label: "Postcode", icon: FaMapMarkerAlt },
  { id: 2, label: "Waste Type", icon: FaTrash },
  { id: 3, label: "Select Skip", icon: FaTruck },
  { id: 4, label: "Permit Check", icon: FaCheckCircle },
  { id: 5, label: "Choose Date", icon: FaCalendarAlt },
  { id: 6, label: "Payment", icon: FaCreditCard },
];

const CheckoutSteps: React.FC<CheckoutStepsProps> = ({ currentStep }) => {
  return (
    <div className="md:border md:border-gray-200 md:dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-transparent md:dark:bg-gray-800 md:shadow-sm">
  

      <div className="hidden lg:flex flex-col gap-3">
        {steps.map((step) => {
          const Icon = step.icon;
          const isActive = step.id === currentStep;
          const isCompleted = step.id < currentStep;

          let bgClass = "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300";
          if (isCompleted) {
            bgClass = "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300";
          } else if (isActive) {
            bgClass = "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300";
          }

          return (
            <div
              key={step.id}
              className={`flex items-center gap-2 py-2 px-3 rounded text-sm ${bgClass}`}
            >
              <Icon className="text-base" />
              <span>{step.label}</span>
            </div>
          );
        })}
      </div>

      <div className="flex lg:hidden overflow-x-auto space-x-6 no-scrollbar">
        {steps.map((step) => {
          const Icon = step.icon;
          const isActive = step.id === currentStep;
          const isCompleted = step.id < currentStep;

          let textClass = "text-gray-500 dark:text-gray-400";
          if (isCompleted) textClass = "text-green-600 dark:text-green-400";
          else if (isActive) textClass = "text-blue-600 dark:text-blue-400";

          return (
            <div
              key={step.id}
              className="flex flex-col items-center whitespace-nowrap"
            >
              <Icon className={`text-xl mb-1 ${textClass}`} />
              <span className={`text-xs font-medium ${textClass}`}>{step.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckoutSteps;
