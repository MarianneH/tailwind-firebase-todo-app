import React, { Dispatch, SetStateAction } from "react";
import TodoListItem from "./TodoListItem";
import { TodoProps } from "../../types/TodoProps";

interface TodoTableType {
  todos: TodoProps[];
  done: boolean;
  setUpdateData: Dispatch<SetStateAction<boolean>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setSelectedTodo: Dispatch<SetStateAction<TodoProps | undefined>>;
}

function TodoTable({
  todos,
  done,
  setUpdateData,
  setShowModal,
  setSelectedTodo,
}: TodoTableType) {
  return (
    <table className="w-10/12 pt-6 bg-white dark:bg-gray-800 dark:text-white border-collapse rounded-lg text-sm">
      <thead className="font-medium">
        <tr>
          <th className="w-8 py-4"></th>
          <th className="text-left">{done ? "Done" : "List of Todos"}</th>
          <th className="text-right w-auto">Creation Date</th>
          <th className="w-8"></th>
        </tr>
      </thead>
      <tbody>
        {todos.map((el, index) => {
          return (
            <React.Fragment key={index}>
              <TodoListItem
                done={done}
                index={index}
                todo={el}
                setUpdateData={setUpdateData}
                setSelectedTodo={setSelectedTodo}
                setShowModal={setShowModal}
              />
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
}

export default TodoTable;
