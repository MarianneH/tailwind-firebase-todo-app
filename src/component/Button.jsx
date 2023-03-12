import React from "react";

function Button({ children }) {
  return (
    <button className="border-none text-white rounded-lg mt-2 px-4 py-2 bg-violet-500 hover:bg-violet-600 hover:drop-shadow-md">
      {children}
    </button>
  );
}

export default Button;
