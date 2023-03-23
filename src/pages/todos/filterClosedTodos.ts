import { TodoProps } from "../../types/TodoProps";

export function filterClosedTodos(allTodos: TodoProps[]) {
  return allTodos.filter((el) => el.isDone);
}
