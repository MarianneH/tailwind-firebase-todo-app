import { TodoProps } from "@/types/TodoProps";
import React, { Dispatch, SetStateAction } from "react";
import { IoSaveOutline } from "react-icons/io5";
import { useAuthContext } from "../../context/AuthContext";
import { saveTodoTitleChangesToDb } from "./saveTodoTitleChangesToDb";

function EditTodoTitle({
  editName,
  setEditName,
  selectedTodo,
}: {
  editName: boolean;
  setEditName: Dispatch<SetStateAction<boolean>>;
  selectedTodo: TodoProps;
}) {
  const { currentUser } = useAuthContext();
  return (
    <>
      {!editName ? (
        <div
          className="inline group hover:cursor-text"
          onClick={() => setEditName((prev) => !prev)}
        >
          {selectedTodo.todo}
          <span className="ml-3 hidden text-gray-500 group-hover:inline">
            edit
          </span>
        </div>
      ) : (
        <form
          className="inline"
          onSubmit={(e) => {
            saveTodoTitleChangesToDb(e, selectedTodo.id, currentUser.uid);
            setEditName((prev) => !prev);
          }}
        >
          <input
            type="text"
            id="newTitle"
            name="newTitle"
            defaultValue={selectedTodo.todo}
            autoFocus
          />
          <button>
            <IoSaveOutline className="inline ml-2 text-violet-500" />
          </button>
        </form>
      )}
    </>
  );
}

export default EditTodoTitle;
