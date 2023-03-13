import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export async function handleSetTodoDoneInDb(done, currentUser, todoId) {
  const isDone = done ? false : true;
  await updateDoc(doc(db, "users", currentUser, "todos", todoId), {
    isDone: isDone,
  });
}
