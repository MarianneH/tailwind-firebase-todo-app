import React, { useEffect, useState } from "react";
import TodoForm from "../../component/TodoForm";
import TodoTable from "../../component/TodoTable";
import { useAuthContext } from "../../context/AuthContext";
import { fetchTodosFromDb } from "./fetchTodoDataFromDb";

function Todos() {
  const { currentUser } = useAuthContext();
  const [todos, setTodos] = useState([]);
  const [updateData, setUpdateData] = useState(false);
  useEffect(() => {
    if (currentUser)
      fetchTodosFromDb(currentUser.uid).then((result) => setTodos(result));
  }, [currentUser, updateData]);

  const [elemToRemove, setElemToRemove] = useState(null);

  useEffect(() => {
    setTodos((prev) => prev.filter((el) => el.id !== elemToRemove));
  }, [elemToRemove]);

  const toggleDone = (element) => {
    setTodos(
      [...todos].map((todo) => {
        if (todo.id === element.id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
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
      <TodoForm setUpdateData={setUpdateData} />
      {todos[0] && (
        <>
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
        </>
      )}
    </div>
  );
}

export default Todos;
