import { Link } from "react-router-dom";

const Top = () => {
  return (
    <>
      <h2>トップ画面</h2>
      <div className="p-10">
        <p>各機能へのリンク</p>
        <ul className="list-disc pl-10">
          <li>
            Todo画面は<Link to={"/todo/"}>こちら</Link>
          </li>
          <li>
            カウント画面は<Link to={"/count/"}>こちら</Link>
          </li>
          <li>
            ランダム画像表示画面は<Link to={"/random_image/"}>こちら</Link>
          </li>
          <li>
            User画面は<Link to={"/user/"}>こちら</Link>
          </li>
        </ul>
      </div>
      <div className="p-10">
        <p>ユーザ画面へのリンク</p>
        <ul className="list-disc pl-10">
          {/* Linkを設定することで、user/hogeのURLの画面に遷移する */}
          {/* App.jsxでuser/hogeのURLはUserDetailコンポーネントへ遷移されるように設定しているため、結果的にhogeをparamsで受け取ったUserDetail画面が描画される */}
          <li>
            <Link to={"/user/1"}>1</Link>
          </li>
          <li>
            <Link to={"/user/2"}>2</Link>
          </li>
          <li>
            <Link to={"/user/3"}>3</Link>
          </li>
          <li>
            <Link to={"/user/4"}>4</Link>
          </li>
          <li>
            <Link to={"/user/5"}>5</Link>
          </li>
          <li>
            <Link to={"/user/6"}>6</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Top;
