import { Link } from "react-router-dom";
import { useState } from "react";

export const Count = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="text-center">
        <h2>カウント画面</h2>
        <p>現在の値：{count}</p>
      </div>
      <div className="m-4 text-center">
        <button
          className="m-4 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
          onClick={increment}
        >
          +
        </button>
        <button
          className="m-4 bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
          onClick={decrement}
        >
          -
        </button>
      </div>
    </>
  );
};
