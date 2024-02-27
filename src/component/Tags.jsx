import React from "react";

/* hold */

const Tags = ({ text, type }) => {
  const getStyle = () => {
    switch (type) {
      case "primary":
        return "bg-green-200 text-gray-600";

      case "red":
        return "bg-red-200 text-gray-600";

      case "blue":
        return "bg-blue-200 text-gray-600";

      default:
        return "bg-teal-200 text-gray-600";
    }
  };
  return (
    <div
      className={`${getStyle()} px-6 py-1 text-xs font-semibold tracking-wide rounded-full capitalize `}
    >
      {text}
    </div>
  );
};

export default Tags;
