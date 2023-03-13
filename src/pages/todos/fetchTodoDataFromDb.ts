import { db } from "../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

interface Todo {
  id: string;
}

export async function fetchTodosFromDb(currentUserId: string) {
  let todos: Todo[] = [];
  const querySnapshot = await getDocs(
    collection(db, "users", currentUserId, "todos")
  );
  querySnapshot.forEach((doc) => {
    const el = { id: doc.id, ...doc.data() };
    todos.push(el);
  });
  return todos;
}
