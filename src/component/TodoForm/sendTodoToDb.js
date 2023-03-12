import { v1 as uuidv1 } from "uuid";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const sendTodoToDb = async (e, currentUser) => {
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
      isUrgent: false,
      isImportant: false,
    };
    e.target.todo.value = "";
    try {
      await addDoc(
        collection(db, "users", currentUser.uid, "todos"),
        todoObject
      );
    } catch (err) {
      console.error(err);
    }
  }
};
