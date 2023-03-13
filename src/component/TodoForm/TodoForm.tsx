import React, { Dispatch, SetStateAction } from "react";
import InputField from "../InputField";
import Button from "../Button";
import { useAuthContext } from "../../context/AuthContext";
import { sendTodoToDb } from "./sendTodoToDb";

function TodoForm({
  setUpdateData,
}: {
  setUpdateData: Dispatch<SetStateAction<boolean>>;
}) {
  const { currentUser } = useAuthContext();

  return (
    <form
      className="w-full p-4 flex justify-center"
      onSubmit={(e) => {
        sendTodoToDb(e, currentUser.uid);
        setUpdateData((prev) => !prev);
      }}
    >
      <InputField
        type="text"
        name="todo"
        id="todo"
        placeholder="add next todo"
      />
      <Button>+ add todo</Button>
    </form>
  );
}

export default TodoForm;
