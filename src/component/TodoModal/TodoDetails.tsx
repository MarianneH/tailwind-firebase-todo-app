import { TodoProps } from "@/types/TodoProps";
import React, { Dispatch, SetStateAction } from "react";
import CheckBoxInput from "./CheckBoxInput";
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
      <table className="leading-6 border-separate border-spacing-y-6">
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
            <CheckBoxInput name="urgent" selectedTodoId={selectedTodo.id} />
          </tr>
          <tr>
            <td>important:</td>
            <CheckBoxInput name="important" selectedTodoId={selectedTodo.id} />
          </tr>
          <tr>
            <td>daily task:</td>
            <CheckBoxInput name="daily" selectedTodoId={selectedTodo.id} />
          </tr>
          <tr>
            <td>time estimate:</td>
            <select name="time_estimate" id="time_estimate" className="ml-4">
              <option value={undefined}>undefined</option>
              <option value={0.25}>15 mins</option>
              <option value={0.5}>30 mins</option>
              <option value={0.75}>45 mins</option>
              <option value={1}>1 hour</option>
              <option value={2}>2 hours</option>
              <option value={3}>3 hours</option>
              <option value={4}>4 hours</option>
              <option value={8}>8 hours</option>
            </select>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TodoDetails;
