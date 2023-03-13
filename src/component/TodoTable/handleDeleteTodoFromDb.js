import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export async function handleDeleteTodoFromDb(currentUser, todoId) {
  await deleteDoc(doc(db, "users", currentUser, "todos", todoId));
}
