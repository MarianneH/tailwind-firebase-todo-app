export function filterOpenTodos(allTodos) {
  return allTodos.filter((el) => !el.isDone);
}
