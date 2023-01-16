import { useState } from "react";

export const useCounter = () => {
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
    if (count > 0) {
      //   countが0より大きい場合はcountの値から1を引く。
      setCount(count - 1);
    } else {
      // countの値が0の時に-ボタンを押された場合、アラートを表示させる。
      setAlert(true);
    }
  };
  // 戻り値としてcount,alert変数とincrement,decrement関数を返す。
  return [count, alert, increment, decrement];
};
