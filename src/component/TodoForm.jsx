import React from "react";
import { v1 as uuidv1 } from "uuid";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";
import InputField from "./InputField";
import Button from "./Button";

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
      <InputField
        type="text"
        name="todo"
        id="todo"
        placeholder="add next todo"
      />
      <Button className="border-none text-white rounded-lg px-4 py-2 bg-violet-500 hover:bg-violet-600 hover:drop-shadow-md">
        + add todo
      </Button>
    </form>
  );
}

export default TodoForm;
