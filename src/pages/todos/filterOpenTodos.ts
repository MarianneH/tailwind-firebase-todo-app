import { TodoProps } from "../../types/TodoProps";

export function filterOpenTodos(allTodos: TodoProps[]) {
  return allTodos.filter((el) => !el.isDone);
}
