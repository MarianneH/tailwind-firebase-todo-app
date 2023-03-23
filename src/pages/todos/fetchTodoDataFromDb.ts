import { db } from "../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";
import { TodoProps } from "../../types/TodoProps";

export async function fetchTodosFromDb(currentUserId: string) {
  let todos: TodoProps[] = [];
  const querySnapshot = await getDocs(
    collection(db, "users", currentUserId, "todos")
  );
  querySnapshot.forEach((doc) => {
    const el = { id: doc.id, ...doc.data() } as TodoProps;
    todos.push(el);
  });
  return todos;
}
