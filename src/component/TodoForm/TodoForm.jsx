import React from "react";
import InputField from "../InputField";
import Button from "../Button";
import { useAuthContext } from "../../context/AuthContext";
import { sendTodoToDb } from "./sendTodoToDb";

function TodoForm({ setUpdateData }) {
  const { currentUser } = useAuthContext();

  return (
    <form
      className="w-full p-4 flex justify-center"
      onSubmit={(e) => {
        sendTodoToDb(e, currentUser);
        setUpdateData((prev) => !prev);
      }}
    >
      <InputField
        type="text"
        name="todo"
        id="todo"
        placeholder="add next todo"
      />
      <Button className="border-none text-white rounded-lg px-4 py-2 bg-violet-500 hover:bg-violet-600 hover:drop-shadow-md">
        + add todo
      </Button>
    </form>
  );
}

export default TodoForm;
