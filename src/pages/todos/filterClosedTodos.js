export function filterClosedTodos(allTodos) {
  return allTodos.filter((el) => el.isDone);
}
