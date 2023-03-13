import React from "react";

function Button({ children }: { children: String }) {
  return (
    <button className="border-none text-white rounded-lg mt-2 px-4 py-2 bg-violet-500 hover:bg-violet-600 hover:drop-shadow-md active:bg-violet-900 transition-all">
      {children}
    </button>
  );
}

export default Button;
