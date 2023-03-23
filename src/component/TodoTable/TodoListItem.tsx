import React, { Dispatch, SetStateAction } from "react";
import { TbTrashX } from "react-icons/tb";
import { useAuthContext } from "../../context/AuthContext";
import { convertMsToGermanDate } from "./convertMsToGermanDate";
import { handleDeleteTodoFromDb } from "./handleDeleteTodoFromDb";
import CheckBubble from "./CheckBubble";
import { TodoProps } from "../../types/TodoProps";

interface TodoListItemType {
  index: number;
  todo: TodoProps;
  setUpdateData: Dispatch<SetStateAction<boolean>>;
  done: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setSelectedTodo: Dispatch<SetStateAction<TodoProps | undefined>>;
}

function TodoListItem({
  done,
  index,
  todo,
  setUpdateData,
  setShowModal,
  setSelectedTodo,
}: TodoListItemType) {
  const { currentUser } = useAuthContext();

  return (
    <>
      <tr
        className={
          !done
            ? index % 2 === 0
              ? "bg-violet-200 dark:bg-violet-800"
              : "bg-violet-300 dark:bg-violet-700"
            : index % 2 === 0
            ? "bg-gray-200 dark:bg-gray-700"
            : "bg-white dark:bg-gray-800"
        }
      >
        <td>
          <CheckBubble
            isDone={todo.isDone}
            currentUserId={currentUser.uid}
            todoId={todo.id}
            done={done}
            setUpdateData={setUpdateData}
          />
        </td>
        <td
          className="p-4 break-words dark:text-white hover:underline"
          onClick={() => {
            setShowModal(true);
            setSelectedTodo(todo);
          }}
        >
          {todo.todo}
        </td>
        <td className="text-right py-4 text-sm text-slate-500 dark:text-slate-400">
          {convertMsToGermanDate(todo.timeStamp.seconds)}
        </td>

        <td className="p-4">
          <TbTrashX
            className="cursor-pointer text-lg dark:text-white"
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
