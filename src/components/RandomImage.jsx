import { Link } from "react-router-dom";

export const RandomImage = () => {
  return (
    <>
      <h2>ランダム画像表示画面</h2>
      <footer>
        <Link to={"/"}>トップに戻る</Link>
      </footer>
    </>
  );
};