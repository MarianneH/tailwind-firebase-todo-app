import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TodoProps } from "../../types/TodoProps";
import EditTodoTitle from "./EditTodoTitle";
import TodoDetails from "./TodoDetails";

function TodoModal({
  selectedTodo,
  setShowModal,
}: {
  selectedTodo: TodoProps;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {
  const [editName, setEditName] = useState<boolean>(false);

  function closeModalClick() {
    setShowModal(false);
    document.body.style.overflow = "scroll";
    window.location.reload();
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, [selectedTodo]);

  return (
    <div className="flex items-start justify-center fixed top-0 left-0 h-screen w-full overflow-y-scroll z-10 bg-opacity-25 bg-black">
      <div className="bg-white dark:bg-gray-800 shadow-md p-6 w-11/12 max-w-3xl text-left mx-auto my-12">
        <div className="flex justify-between text-lg mb-4">
          <div className="text-opacity-60 font-bold uppercase">In focus</div>
          <div onClick={closeModalClick} className="cursor-pointer">
            &#10005;
          </div>
        </div>
        {selectedTodo && (
          <TodoDetails
            selectedTodo={selectedTodo}
            setEditName={setEditName}
            editName={editName}
          />
        )}
      </div>
    </div>
  );
}

export default TodoModal;
