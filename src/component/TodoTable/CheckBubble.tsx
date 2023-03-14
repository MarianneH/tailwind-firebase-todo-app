import React, { Dispatch, SetStateAction, useState } from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { handleSetTodoDoneInDb } from "./handleSetTodoDoneInDb";

interface CheckBubbleType {
  isDone: boolean;
  currentUserId: string;
  todoId: string;
  done: boolean;
  setUpdateData: Dispatch<SetStateAction<boolean>>;
}

export function CheckBubble({
  isDone,
  currentUserId,
  todoId,
  done,
  setUpdateData,
}: CheckBubbleType) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={
        isDone
          ? hovered === false
            ? "bg-violet-900 dark:bg-slate-300 rounded-full aspect-square w-7 ml-2 text-white dark:text-black hover:text-lg flex items-center justify-center transition-all duration-300"
            : "flex items-center justify-center bg-white rounded-full aspect-square w-7 ml-2 hover:text-lg"
          : "flex items-center justify-center bg-white dark:bg-violet-900 rounded-full aspect-square w-7 ml-2 text-white hover:text-lg hover:bg-violet-900 dark:hover:bg-white dark:text-black transition-all duration-300"
      }
      onClick={() => {
        handleSetTodoDoneInDb(currentUserId, todoId, done).then(() => {
          setUpdateData((prev: boolean) => !prev);
        });
      }}
    >
      {isDone ? (
        <IoCheckmarkDoneSharp />
      ) : (
        hovered === true && <IoCheckmarkDoneSharp />
      )}
    </button>
  );
}

export default CheckBubble;
