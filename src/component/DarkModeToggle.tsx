import React, { useState } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.classList.toggle("dark");
    }
  };

  return (
    <div
      className="m-5 p-1 fixed h-8 w-8 bottom-12 right-0 rounded-full text-white text-2xl shadow-sm shadow-gray-500 bg-violet-500 hover:bg-violet-600 cursor-pointer active:bg-violet-900 transition-all dark:hover:bg-violet-500 dark:bg-violet-600 dark:active:bg-violet-400"
      onClick={handleDarkModeToggle}
    >
      {darkMode ? <BsSunFill /> : <BsFillMoonFill />}
    </div>
  );
}

export default DarkModeToggle;
