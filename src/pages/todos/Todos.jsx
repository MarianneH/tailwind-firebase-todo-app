import React, { useEffect, useState } from "react";
import TodoForm from "../../component/TodoForm";
import TodoTable from "../../component/TodoTable";
import { useAuthContext } from "../../context/AuthContext";
import { fetchTodosFromDb } from "./fetchTodoDataFromDb";
import { filterClosedTodos } from "./filterClosedTodos";
import { filterOpenTodos } from "./filterOpenTodos";

function Todos() {
  const { currentUser } = useAuthContext();
  const [todos, setTodos] = useState([]);
  const [openTodos, setOpenTodos] = useState([]);
  const [closedTodos, setClosedTodos] = useState([]);
  const [updateData, setUpdateData] = useState(false);
  useEffect(() => {
    if (currentUser)
      fetchTodosFromDb(currentUser.uid).then((result) => {
        setTodos(result);
        setOpenTodos(filterOpenTodos(result));
        setClosedTodos(filterClosedTodos(result));
      });
  }, [currentUser, updateData]);

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
          <TodoTable todos={openTodos} setUpdateData={setUpdateData} />
          <div className="flex flex-col items-center mt-16 w-full">
            <TodoTable todos={closedTodos} done setUpdateData={setUpdateData} />
          </div>
        </>
      )}
    </div>
  );
}

export default Todos;
