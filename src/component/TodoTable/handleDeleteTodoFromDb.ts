import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export async function handleDeleteTodoFromDb(
  currentUserId: string,
  todoId: string
) {
  await deleteDoc(doc(db, "users", currentUserId, "todos", todoId));
}
