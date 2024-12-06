import React, { memo, useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  console.log("render counter");

  return (
    <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Local State with useState</h2>
      <p className="text-2xl mb-6">
        <span className="font-medium">Count:</span> {count}
      </p>
      <div className="flex space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
          className={`${
            count === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600"
          } text-white px-6 py-2 rounded-full transition duration-300`}
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          disabled={count === 0}
          className={`${
            count === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-yellow-500 hover:bg-yellow-600"
          } text-white px-6 py-2 rounded-full transition duration-300`}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default memo(Counter);
