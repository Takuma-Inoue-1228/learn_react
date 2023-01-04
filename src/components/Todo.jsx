import { Link } from "react-router-dom";

const Todo = () => {
  return (
    <>
      <h2>Todo画面</h2>
      <footer>
        <Link to={"/"}>トップに戻る</Link>
      </footer>
    </>
  );
};

export default Todo;
