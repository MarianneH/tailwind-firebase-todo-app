import React, { Dispatch, SetStateAction, useEffect } from "react";
import { TodoProps } from "../../types/TodoProps";

function TodoModal({
  selectedTodo,
  setShowModal,
}: {
  selectedTodo: TodoProps;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {
  function handleClick() {
    setShowModal(false);
    document.body.style.overflow = "scroll";
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, [selectedTodo]);

  return (
    <div
      className="flex items-start justify-center fixed top-0 left-0 h-screen w-full overflow-y-scroll z-10 bg-opacity-25 bg-black"
      onClick={handleClick}
    >
      <div className="bg-white dark:bg-gray-800 shadow-md p-6 w-11/12 max-w-3xl text-left mx-auto my-4">
        <div className="flex justify-between text-lg mb-4">
          <div className="text-opacity-60 font-bold uppercase">In focus</div>
          <div onClick={handleClick} className="cursor-pointer">
            &#10005;
          </div>
        </div>
        {selectedTodo && (
          <div className="">
            <h1 className="mb-2">{selectedTodo.todo}</h1>
            <ul>
              <li className="hover:cursor-text group">
                name: {selectedTodo.todo}{" "}
                <span className="ml-4 hidden text-gray-500 group-hover:inline">
                  edit
                </span>
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoModal;
