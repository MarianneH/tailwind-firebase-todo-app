import TodoModal from "../../component/TodoModal/TodoModal";
import React, { useEffect, useState } from "react";
import TodoForm from "../../component/TodoForm";
import TodoTable from "../../component/TodoTable";
import { useAuthContext } from "../../context/AuthContext";
import { fetchTodosFromDb } from "./fetchTodoDataFromDb";
import { filterClosedTodos } from "./filterClosedTodos";
import { filterOpenTodos } from "./filterOpenTodos";

interface Todo {
  isDone: boolean;
  todo: string;
  timeStamp: {
    seconds: number;
  };
  id: string;
}

function Todos() {
  const { currentUser } = useAuthContext();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [openTodos, setOpenTodos] = useState<Todo[]>([]);
  const [closedTodos, setClosedTodos] = useState<Todo[]>([]);
  const [updateData, setUpdateData] = useState(false);
  const [showModal, setShowModal] = useState(true);
  useEffect(() => {
    if (currentUser)
      fetchTodosFromDb(currentUser.uid).then((result) => {
        setTodos(result);
        setOpenTodos(filterOpenTodos(result));
        setClosedTodos(filterClosedTodos(result));
      });
  }, [currentUser, updateData]);

  return (
    <div className="flex flex-col items-center mt-20 mb-40">
      <h1>As Good As Done</h1>
      <TodoForm setUpdateData={setUpdateData} />
      {todos[0] && (
        <>
          <TodoTable
            todos={openTodos}
            done={false}
            setUpdateData={setUpdateData}
          />
          <div className="flex flex-col items-center mt-16 w-full">
            <TodoTable todos={closedTodos} done setUpdateData={setUpdateData} />
          </div>
        </>
      )}
      {showModal && todos[1] && (
        <TodoModal selectedTodo={todos[1]} setShowModal={setShowModal} />
      )}
    </div>
  );
}

export default Todos;
