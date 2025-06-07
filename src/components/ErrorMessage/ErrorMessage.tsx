import { FaExclamationTriangle } from "react-icons/fa";

const ErrorMessage = ({ message = "Something went wrong!" }) => {
  return (
    <div className="bg-red-100 text-red-700 p-4 rounded-md flex items-center gap-2">
      <FaExclamationTriangle className="text-red-500" />
      <span>{message}</span>
    </div>
  );
};

export default ErrorMessage;
