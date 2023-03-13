import React, { Dispatch, SetStateAction, useState } from "react";
import { TbTrashX } from "react-icons/tb";
import { useAuthContext } from "../../context/AuthContext";
import { convertMsToGermanDate } from "./convertMsToGermanDate";
import { handleDeleteTodoFromDb } from "./handleDeleteTodoFromDb";
import { handleSetTodoDoneInDb } from "./handleSetTodoDoneInDb";

interface Todo {
  isDone: boolean;
  todo: string;
  timeStamp: {
    seconds: number;
  };
  id: string;
}

interface TodoListItemType {
  index: number;
  todo: Todo;
  setUpdateData: Dispatch<SetStateAction<boolean>>;
  done: boolean;
}

function TodoListItem({ done, index, todo, setUpdateData }: TodoListItemType) {
  const { currentUser } = useAuthContext();
  const [hovered, setHovered] = useState(false);

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
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={
              todo.isDone
                ? hovered === false
                  ? "bg-violet-900 rounded-full aspect-square w-7 ml-2 text-white hover:text-lg"
                  : "bg-white rounded-full aspect-square w-7 ml-2 hover:text-lg"
                : "bg-white rounded-full aspect-square w-7 ml-2 text-white hover:text-lg hover:bg-violet-900 transition-all"
            }
            onClick={() => {
              handleSetTodoDoneInDb(currentUser.uid, todo.id, done).then(() => {
                setUpdateData((prev: boolean) => !prev);
              });
            }}
          >
            {todo.isDone ? "✓" : hovered === true && "✓"}
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
                setUpdateData((prev: boolean) => !prev);
              })
            }
          />
        </td>
      </tr>
    </>
  );
}

export default TodoListItem;
