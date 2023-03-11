import React from "react";
import { TbTrashX } from "react-icons/tb";

function TodoTable({ todos, toggleDone, setElemToRemove }) {
  return (
    <table className="w-11/12 pt-6 bg-white  border-collapse rounded-lg text-sm">
      <thead className="font-medium">
        <tr>
          <th className="w-7 py-4"></th>
          <th className="text-left">List of Todos</th>
          <th className="text-right  w-auto">Creation Date</th>
          <th className="w-8"></th>
        </tr>
      </thead>
      <tbody>
        {todos.map((el, index) => {
          return (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-violet-200" : "bg-violet-300"}
            >
              <td>
                <button
                  className={
                    el.isDone
                      ? "bg-violet-900 rounded-full w-full ml-2 text-white"
                      : "bg-white rounded-full w-full ml-2"
                  }
                  onClick={() => toggleDone(el)}
                >
                  {el.isDone ? "✓" : "x"}
                </button>
              </td>
              <td className="p-4 break-words">{el.name}</td>
              <td className="text-right py-4 text-sm text-slate-500">
                {el.timestamp.toString().split("").splice(4, 11).join("")}{" "}
              </td>

              <td className="p-4">
                <TbTrashX
                  className="cursor-pointer text-lg"
                  onClick={() => setElemToRemove(el.id)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TodoTable;
