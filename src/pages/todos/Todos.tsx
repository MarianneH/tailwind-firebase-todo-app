import TodoModal from "../../component/TodoModal/TodoModal";
import React, { useEffect, useState } from "react";
import TodoForm from "../../component/TodoForm";
import TodoTable from "../../component/TodoTable";
import { useAuthContext } from "../../context/AuthContext";
import { fetchTodosFromDb } from "./fetchTodoDataFromDb";
import { filterClosedTodos } from "./filterClosedTodos";
import { filterOpenTodos } from "./filterOpenTodos";
import { TodoProps } from "../../types/TodoProps";

function Todos() {
  const { currentUser } = useAuthContext();
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [openTodos, setOpenTodos] = useState<TodoProps[]>([]);
  const [closedTodos, setClosedTodos] = useState<TodoProps[]>([]);
  const [updateData, setUpdateData] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<TodoProps | undefined>();
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
            setSelectedTodo={setSelectedTodo}
            setShowModal={setShowModal}
          />
          <div className="flex flex-col items-center mt-16 w-full">
            <TodoTable
              todos={closedTodos}
              done
              setUpdateData={setUpdateData}
              setSelectedTodo={setSelectedTodo}
              setShowModal={setShowModal}
            />
          </div>
        </>
      )}
      {showModal && selectedTodo && (
        <TodoModal selectedTodo={selectedTodo} setShowModal={setShowModal} />
      )}
    </div>
  );
}

export default Todos;
