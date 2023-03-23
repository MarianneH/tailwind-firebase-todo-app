import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TodoProps } from "../../types/TodoProps";
import EditTodoTitle from "./EditTodoTitle";

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
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, [selectedTodo]);

  return (
    <div className="flex items-start justify-center fixed top-0 left-0 h-screen w-full overflow-y-scroll z-10 bg-opacity-25 bg-black">
      <div className="bg-white dark:bg-gray-800 shadow-md p-6 w-11/12 max-w-3xl text-left mx-auto my-4">
        <div className="flex justify-between text-lg mb-4">
          <div className="text-opacity-60 font-bold uppercase">In focus</div>
          <div onClick={closeModalClick} className="cursor-pointer">
            &#10005;
          </div>
        </div>
        {selectedTodo && (
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
                </tr>
                <tr>
                  <td>important:</td>
                </tr>
                <tr>
                  <td>daily task:</td>
                </tr>
                <tr>
                  <td>time estimate:</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoModal;
