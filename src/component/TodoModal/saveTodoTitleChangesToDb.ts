import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export async function saveTodoTitleChangesToDb(
  e: React.FormEvent<HTMLFormElement>,
  todoId: string,
  currentUserId: string
) {
  e.preventDefault();
  let newTitle: string = e.currentTarget.newTitle.value;

  await updateDoc(doc(db, "users", currentUserId, "todos", todoId), {
    todo: newTitle,
  });
}
