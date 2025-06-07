import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useDarkMode } from "../../hooks/useDarkmode";

const DarkModeToggle: React.FC = () => {
  const { isDark, toggle } = useDarkMode();

  return (
    <button
      onClick={toggle}
      className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <FaSun size={20} className="text-yellow-400" />
      ) : (
        <FaMoon size={20} className="text-gray-600" />
      )}
    </button>
  );
};

export default DarkModeToggle;
