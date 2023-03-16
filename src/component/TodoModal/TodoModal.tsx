import React, { Dispatch, SetStateAction, useEffect } from "react";

interface Todo {
  isDone: boolean;
  todo: string;
  timeStamp: {
    seconds: number;
  };
  id: string;
}

function TodoModal({
  selectedTodo,
  setShowModal,
}: {
  selectedTodo: Todo;
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
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate rerum blanditiis commodi! Aspernatur suscipit mollitia
              unde! Incidunt impedit commodi minima cum nesciunt iusto sapiente
              eum! Nihil maxime accusamus facere praesentium. Culpa, doloremque,
              consectetur optio quaerat ipsam molestiae mollitia qui vel
              delectus saepe voluptatem omnis rem fugit aperiam quae, alias
              deleniti officia id! Quibusdam ex consequuntur cumque amet sunt
              cum veritatis! Atque corrupti quidem est molestias tempore ipsam
              ex optio tempora cum minus, quaerat veritatis quas facere commodi
              rerum consectetur architecto accusamus sit quasi reiciendis beatae
              praesentium. Assumenda maxime minus obcaecati! Doloremque maxime
              corporis, earum tempore dolorem iure voluptas explicabo, beatae
              nostrum incidunt quod ipsa soluta aspernatur alias blanditiis
              dolore provident voluptatum illo accusamus quia sequi, nobis sed
              itaque! In, quia.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoModal;
