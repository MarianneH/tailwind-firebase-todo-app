import React, { useEffect, useState } from "react";
import "./App.css";
import { TbTrashX } from "react-icons/tb";
import TodoForm from "./component/TodoForm";
import TodoTable from "./component/TodoTable";

function App() {
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
  const [elemDone, setElemDone] = useState(null);

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
      <h1 className="text-3xl font-bold justify-center">As good as done</h1>
      <TodoForm setTodos={setTodos} />
      <TodoTable
        todos={todos}
        toggleDone={toggleDone}
        setElemToRemove={setElemToRemove}
      />
    </div>
  );
}

export default App;
