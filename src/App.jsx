import React, { useEffect, useState } from "react";
import "./App.css";
import { v1 as uuidv1 } from "uuid";
import { TbTrashX } from "react-icons/tb";

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
  function handleFormSubmit(e) {
    e.preventDefault();
    if (e.target.todo.value) {
      let todo = e.target.todo.value;
      e.target.todo.value = "";
      let id = uuidv1();

      setTodos((prev) => [
        ...prev,
        { id: uuidv1(), name: todo, isDone: false, timestamp: new Date() },
      ]);
    }
  }

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
    <div className="container">
      <h1>As good as done</h1>
      <form action="" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="what needs to be done?"
        />
        <button>+ add todo</button>
      </form>
      <div className="todos">
        <table className="tableRow">
          <tr>
            <th>Done?</th>
            <th>Title</th>
            <th>Date of creation</th>
            <th>remove?</th>
          </tr>
          {todos.map((el, index) => {
            return (
              <tr key={index} className={index % 2 === 0 ? "row dark" : "row"}>
                <td className="button_col">
                  <button
                    className={
                      el.isDone ? "table_button done" : "table_button "
                    }
                    onClick={() => toggleDone(el)}
                  >
                    {el.isDone ? `✓` : "x"}
                  </button>
                  {el.isDone ? <div>done</div> : <div>TODO</div>}
                </td>
                <td className="title">{el.name}</td>
                <td>
                  {el.timestamp.toString().split("").splice(0, 15).join("")}{" "}
                </td>

                <td className="delete">
                  <TbTrashX onClick={() => setElemToRemove(el.id)} />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
