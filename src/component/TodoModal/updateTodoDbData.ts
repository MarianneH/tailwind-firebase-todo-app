import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

interface DataProps {
  important?: boolean;
  urgent?: boolean;
  daily?: boolean;
  [key: string]: any;
}

export async function updateTodoDbData(
  data: DataProps,
  todoId: string,
  currentUserId: string
) {
  await updateDoc(doc(db, "users", currentUserId, "todos", todoId), data);
  return data;
}
