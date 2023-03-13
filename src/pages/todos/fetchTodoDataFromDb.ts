import { db } from "../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

interface Todo {
  isDone: boolean;
  todo: string;
  timeStamp: {
    seconds: number;
  };
  id: string;
}
export async function fetchTodosFromDb(currentUserId: string) {
  let todos: Todo[] = [];
  const querySnapshot = await getDocs(
    collection(db, "users", currentUserId, "todos")
  );
  querySnapshot.forEach((doc) => {
    const el = { id: doc.id, ...doc.data() } as Todo;
    todos.push(el);
  });
  return todos;
}
