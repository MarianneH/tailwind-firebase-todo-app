import React, { useEffect, useState } from "react";
import TodoForm from "../../component/TodoForm";
import TodoTable from "../../component/TodoTable";

function Todos() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "todo",
      isDone: false,
      timestamp: new Date(),
      isUrgent: false,
      isImportant: false,
    },
    {
      id: 2,
      name: "hello",
      isDone: true,
      timestamp: new Date(),
      isUrgent: false,
      isImportant: false,
    },
  ]);
  const [elemToRemove, setElemToRemove] = useState(null);

  useEffect(() => {
    setTodos((prev) => prev.filter((el) => el.id !== elemToRemove));
  }, [elemToRemove]);

  const toggleDone = (element) => {
    setTodos(
      [...todos].map((singleTodo) => {
        if (singleTodo.id === element.id) {
          singleTodo.isDone = !singleTodo.isDone;
        }
        return singleTodo;
      })
    );
  };
  return (
    <div className="flex flex-col items-center mt-4">
      <h1 className="text-3xl font-bold justify-center inline-block">
        As Good As Done
        <img
          src="logo.svg"
          alt="purple circle with a check mark"
          className="w-6 ml-4 inline-block"
        />
      </h1>
      <TodoForm setTodos={setTodos} />
      <TodoTable
        todos={todos}
        toggleDone={toggleDone}
        setElemToRemove={setElemToRemove}
      />
      <div className="flex flex-col items-center mt-16 w-full">
        <TodoTable
          todos={todos}
          toggleDone={toggleDone}
          setElemToRemove={setElemToRemove}
          done
        />
      </div>
    </div>
  );
}

export default Todos;
