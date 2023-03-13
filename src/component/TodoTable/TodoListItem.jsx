import React, { useState } from "react";
import { TbTrashX } from "react-icons/tb";
import { useAuthContext } from "../../context/AuthContext";
import { convertMsToGermanDate } from "./convertMsToGermanDate";
import { handleDeleteTodoFromDb } from "./handleDeleteTodoFromDb";
import { handleSetTodoDoneInDb } from "./handleSetTodoDoneInDb";

function TodoListItem({ done, index, todo, setUpdateData }) {
  const { currentUser } = useAuthContext();

  return (
    <>
      <tr
        className={
          !done
            ? index % 2 === 0
              ? "bg-violet-200"
              : "bg-violet-300"
            : index % 2 === 0
            ? "bg-gray-200"
            : "bg-gray-300"
        }
      >
        <td>
          <button
            className={
              todo.isDone
                ? "bg-violet-900 rounded-full w-7 ml-2 text-white"
                : "bg-white rounded-full w-7 ml-2"
            }
            onClick={() => {
              handleSetTodoDoneInDb(done, currentUser.uid, todo.id).then(() => {
                setUpdateData((prev) => !prev);
              });
            }}
          >
            {todo.isDone ? "✓" : "x"}
          </button>
        </td>
        <td className="p-4 break-words">{todo.todo}</td>
        <td className="text-right py-4 text-sm text-slate-500">
          {convertMsToGermanDate(todo.timeStamp.seconds)}
        </td>

        <td className="p-4">
          <TbTrashX
            className="cursor-pointer text-lg"
            onClick={() =>
              handleDeleteTodoFromDb(currentUser.uid, todo.id).then(() => {
                setUpdateData((prev) => !prev);
              })
            }
          />
        </td>
      </tr>
    </>
  );
}

export default TodoListItem;
