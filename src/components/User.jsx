import { Link } from "react-router-dom";

export const User = () => {
  return (
    <>
      <h2>ユーザ画面</h2>
      <footer>
        <Link to={"/"}>トップに戻る</Link>
      </footer>
    </>
  );
};