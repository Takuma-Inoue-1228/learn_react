import { Link } from "react-router-dom";
import { useState } from "react";

export const CountPage = () => {
  // useStateでカウントする値を管理。初期値は0。
  const [count, setCount] = useState(0);
  // useStateでアラートを表示を管理。初期値はfalse（表示しない）。
  const [alert, setAlert] = useState(false);

  const increment = () => {
    setCount(count + 1);
    //   エラーが表示されている状態で+ボタンを押された場合、アラートを非表示にさせる。
    setAlert(false);
  };

  const decrement = () => {
    if (0 < count) {
      //   countが0より大きい場合はcountの値から1を引く。
      setCount(count - 1);
    } else {
      // countの値が0の時に-ボタンを押された場合、アラートを表示させる。
      setAlert(true);
    }
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
      {/* alertがtrueの場合はアラート文を表示する。falseの場合は空文字を返す。 */}
      {alert ? (
        <p className="bg-red-100 border border-red-400 text-red-700 m-4 px-4 py-3 rounded relative">
          値を0以下にはできません。
        </p>
      ) : (
        ""
      )}
    </>
  );
};
