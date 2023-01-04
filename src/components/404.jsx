import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h2>404 エラー</h2>
      <p>お探しのページは見つかりませんでした。</p>
      <footer>
        <Link to={"/"}>トップに戻る</Link>
      </footer>
    </>
  );
};

export default NotFound;