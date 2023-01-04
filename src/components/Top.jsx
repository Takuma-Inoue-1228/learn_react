import { Link } from "react-router-dom";

export const Top = () => {
  return (
    <>
      <h2>トップ画面</h2>
      <div className="mx-10">
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
