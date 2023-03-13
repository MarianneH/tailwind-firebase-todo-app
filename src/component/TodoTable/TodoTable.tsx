import React, { Dispatch, SetStateAction } from "react";
import TodoListItem from "./TodoListItem";

interface Todo {
  isDone: boolean;
  todo: string;
  timeStamp: {
    seconds: number;
  };
  id: string;
}

interface TodoTableType {
  todos: Todo[];
  done?: boolean;
  setUpdateData: Dispatch<SetStateAction<boolean>>;
}

function TodoTable({ todos, done, setUpdateData }: TodoTableType) {
  return (
    <table className="w-10/12 pt-6 bg-white border-collapse rounded-lg text-sm">
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
              />
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
}

export default TodoTable;
