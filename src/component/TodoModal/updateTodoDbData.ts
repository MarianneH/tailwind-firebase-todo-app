import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

interface DataProps {
  [key: string]: any;
}

export async function updateTodoDbData(
  data: DataProps,
  todoId: string,
  currentUserId: string
) {
  await updateDoc(doc(db, "users", currentUserId, "todos", todoId), data);

  if (data.todo) {
    return data.todo;
  } else {
    return "data";
  }
}
