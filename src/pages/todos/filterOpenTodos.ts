interface Todo {
  isDone: boolean;
  todo: string;
  timeStamp: {
    seconds: number;
  };
  id: string;
}
export function filterOpenTodos(allTodos: Todo[]) {
  return allTodos.filter((el) => !el.isDone);
}
