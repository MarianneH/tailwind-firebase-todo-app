import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const sendTodoToDb = async (
  e: React.FormEvent<HTMLFormElement>,
  currentUserId: string
) => {
  e.preventDefault();

  if (e.currentTarget.todo.value) {
    let todo: string = e.currentTarget.todo.value;
    let timeStamp = new Date();

    let todoObject = {
      todo: todo,
      timeStamp: timeStamp,
      isDone: false,
      isUrgent: false,
      isImportant: false,
    };

    e.currentTarget.todo.value = "";

    try {
      await addDoc(collection(db, "users", currentUserId, "todos"), todoObject);
    } catch (err) {
      console.error(err);
    }
  }
};
