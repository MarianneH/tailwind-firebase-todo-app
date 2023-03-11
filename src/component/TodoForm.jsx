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
        className="px-4 py-2 w-auto md:w-9/12 mr-2 bg-white rounded-lg"
        name="todo"
        id="todo"
        placeholder="add next todo"
      />
      <button className="border-none rounded-lg px-4 py-2 bg-teal-500 hover:bg-teal-600 hover:drop-shadow-md">
        + add todo
      </button>
    </form>
  );
}

export default TodoForm;
