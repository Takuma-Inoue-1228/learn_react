import { useEffect } from "react";
import { useCounter } from "../hooks/useCounter";

export const CountPage = () => {
  // カスタムフックとして定義したuseCountを呼び出し、count,alert変数とincrement,decrement関数を呼び出す。
  const [count, alert, increment, decrement] = useCounter();

  // CountPageコンポーネントがマウントされた時とアンマウントされた時にコンスールを表示する。
  useEffect(() => {
    console.log("CountPageコンポーネントがマウントされました。");
    return () => {
      console.log("CountPageコンポーネントがアンマウントされました。");
    };
  }, []);

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
      {/* alertがtrueの場合はアラート文を表示する。falseの場合は空文字を返す。 */}
      {alert && (
        <p className="bg-red-100 border border-red-400 text-red-700 m-4 px-4 py-3 rounded relative">
          値を0以下にはできません。
        </p>
      )}
    </>
  );
};
