import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export async function handleSetTodoDoneInDb(
  currentUserId: string,
  todoId: string,
  done: boolean
) {
  const isDone = done ? false : true;
  await updateDoc(doc(db, "users", currentUserId, "todos", todoId), {
    isDone: isDone,
  });
}
