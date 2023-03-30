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
            <select name="time_estimate" id="time_estimate" className="ml-4">
              <option value={undefined}>-</option>
              <option value={0.25}>15 mins</option>
              <option value={0.5}>30 mins</option>
              <option value={0.75}>45 mins</option>
              <option value={1}>1 hour</option>
              <option value={2}>2 hour</option>
              <option value={3}>3 hour</option>
              <option value={4}>1/2 day</option>
              <option value={8}>1 day</option>
            </select>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TodoDetails;
