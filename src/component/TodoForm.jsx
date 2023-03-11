import React from "react";
import { v1 as uuidv1 } from "uuid";

function TodoForm({ setTodos }) {
  function handleFormSubmit(e) {
    e.preventDefault();
    if (e.target.todo.value) {
      let todo = e.target.todo.value;
      e.target.todo.value = "";

      setTodos((prev) => [
        ...prev,
        { id: uuidv1(), name: todo, isDone: false, timestamp: new Date() },
      ]);
    }
  }
  return (
    <form
      className="w-full p-4 flex justify-center"
      action=""
      onSubmit={handleFormSubmit}
    >
      <input
        type="text"
        className="px-4 py-2 w-auto md:w-9/12 mr-2 bg-white rounded-lg drop-shadow-md"
        name="todo"
        id="todo"
        placeholder="add next todo"
      />
      <button className="border-none text-white rounded-lg px-4 py-2 bg-violet-500 hover:bg-violet-600 hover:drop-shadow-md">
        + add todo
      </button>
    </form>
  );
}

export default TodoForm;
