import React from "react";

const Toggle = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="text-2xl font-bold mb-4">OFF</div>
      <button className="px-3 py-1 border border-gray-600 rounded-full bg-indigo-600 text-white font-semibold">
        Click to Toggle
      </button>
    </div>
  );
};

export default Toggle;
