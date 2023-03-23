import { TodoProps } from "@/types/TodoProps";
import React, { Dispatch, SetStateAction } from "react";
import EditTodoTitle from "./EditTodoTitle";

function TodoDetails({
  selectedTodo,
  setEditName,
  editName,
}: {
  selectedTodo: TodoProps;
  setEditName: Dispatch<SetStateAction<boolean>>;
  editName: boolean;
}) {
  return (
    <div className="">
      <h1 className="mb-2">{selectedTodo.todo}</h1>
      <table className="leading-6">
        <tbody>
          <tr>
            <td>name:</td>
            <td>
              <EditTodoTitle
                editName={editName}
                setEditName={setEditName}
                selectedTodo={selectedTodo}
              />
            </td>
          </tr>

          <tr>
            <td>urgent:</td>
          </tr>
          <tr>
            <td>important:</td>
          </tr>
          <tr>
            <td>daily task:</td>
          </tr>
          <tr>
            <td>time estimate:</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TodoDetails;
