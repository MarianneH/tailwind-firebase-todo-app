import React from "react";

interface InputFieldTypes {
  type: string;
  name: string;
  id: string;
  placeholder: string | undefined;
}

function InputField({ type, name, id, placeholder }: InputFieldTypes) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className="px-4 py-2 w-full mt-2 mr-2 bg-white dark:bg-gray-600 rounded-lg drop-shadow-md"
    />
  );
}

export default InputField;
