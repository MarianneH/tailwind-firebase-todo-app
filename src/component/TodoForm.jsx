import React from "react";
import { v1 as uuidv1 } from "uuid";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

function TodoForm({ setTodos }) {
  const handleAddTodo = async (e) => {
    e.preventDefault();

    const id = uuidv1();
    if (e.target.todo.value) {
      let todo = e.target.todo.value;
      let timeStamp = new Date();
      let todoObject = {
        todo: todo,
        id: id,
        timeStamp: timeStamp,
        isDone: false,
      };
      e.target.todo.value = "";
      try {
        const docRef = await addDoc(collection(db, "todos"), todoObject);
      } catch (err) {
        console.error(err);
      }

      setTodos((prev) => [
        ...prev,
        { id: id, name: todo, isDone: false, timestamp: new Date() },
      ]);
    }
  };
  return (
    <form
      className="w-full p-4 flex justify-center"
      action=""
      onSubmit={handleAddTodo}
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
