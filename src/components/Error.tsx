import React from 'react';

interface ErrorMessageProps {
  message?: string;
  retry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message = "Something went wrong.", retry }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded max-w-md mx-auto mt-6 text-center">
      <strong className="font-bold block mb-2">Error:</strong>
      <span className="block">{message}</span>
      {retry && (
        <button
          onClick={retry}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-4 rounded"
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
