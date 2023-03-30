import { useAuthContext } from "../../context/AuthContext";
import React from "react";
import { updateTodoDbData } from "./updateTodoDbData";

function CheckBoxInput({
  name,
  selectedTodoId,
}: {
  name: "urgent" | "important" | "daily";
  selectedTodoId: string;
}) {
  const { currentUser } = useAuthContext();

  return (
    <input
      type="checkbox"
      id={name}
      name={name}
      className="ml-4"
      onChange={(e) => {
        let data = {
          [name]: e.target.checked,
        };
        updateTodoDbData(data, selectedTodoId, currentUser.uid);
      }}
    />
  );
}

export default CheckBoxInput;