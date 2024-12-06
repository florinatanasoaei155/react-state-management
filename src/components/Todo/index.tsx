import React, { useReducer, useState } from "react";

type Todo = { id: number; text: string };
type Action =
  | { type: "ADD"; payload: string }
  | { type: "REMOVE"; payload: number };

const reducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.payload }];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodoList: React.FC = () => {
  console.log("todo render");
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState<string>("");

  const addTodo = () => {
    if (input.trim()) {
      dispatch({ type: "ADD", payload: input });
      setInput("");
    }
  };

  return (
    <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">
        Local State with useReducer
      </h2>
      <div className="flex mb-4 w-full">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter todo"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-6 py-2 rounded-r-lg hover:bg-blue-600 transition duration-300"
        >
          Add
        </button>
      </div>
      <ul className="w-full">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center mb-2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded"
          >
            <span>{todo.text}</span>
            <button
              onClick={() => dispatch({ type: "REMOVE", payload: todo.id })}
              className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition duration-300"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
