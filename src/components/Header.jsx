import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex p-4 bg-gray-300">
      <div className="ml-4">
        <Link to={"/"}>Back to Top</Link>
      </div>
      <div className="ml-auto">
        <ul className="flex gap-6">
          <li>
            <Link to={"/todo"}>Todo</Link>
          </li>
          <li>
            <Link to={"/count"}>カウント</Link>
          </li>
          <li>
            <Link to={"/random_image"}>画像表示</Link>
          </li>
          <li>
            <Link to={"/user"}>ユーザ</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
