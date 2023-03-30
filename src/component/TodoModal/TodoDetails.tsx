import { TodoProps } from "@/types/TodoProps";
import React, { Dispatch, SetStateAction } from "react";
import InputField from "../InputField";
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
            <input type="checkbox" id="urgent" name="urgent" className="ml-4" />
          </tr>
          <tr>
            <td>important:</td>
            <input
              type="checkbox"
              id="important"
              name="important"
              className="ml-4"
            />
          </tr>
          <tr>
            <td>daily task:</td>
            <input type="checkbox" id="daily" name="daily" className="ml-4" />
          </tr>
          <tr>
            <td>time estimate:</td>
            <input type="text" name="estimate" id="estimate" className="ml-4" />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TodoDetails;
