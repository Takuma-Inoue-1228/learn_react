// react-router-domでBrowserRouter・Routes・Routeを使用するための宣言をする
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 各コンポーネントをインポートとして使えるようにする
import { Top } from "./components/Top";
import { Todo } from "./components/Todo";
import { Count } from "./components/Count";
import { RandomImage } from "./components/RandomImage";
import { User } from "./components/User";
import { UserDetail } from "./components/UserDetail";
import { NotFound } from "./components/404";

function App() {
  return (
    //   リンク先の各ページを記述
    <BrowserRouter>
      <Routes>
        {/* 〜/のURLはTOPコンポーネントを描画するように設定 */}
        <Route path={"/"} element={<Top />} />
        {/* 各コンポーネントを描画するリンク先 */}
        <Route path={"/todo"} element={<Todo />} />
        <Route path={"/count"} element={<Count />} />
        <Route path={"/random_image"} element={<RandomImage />} />
        <Route path={"/user"} element={<User />} />
        {/* user/〜に値が入っていた場合はUserDetailのコンポーネントを描画 */}
        <Route path={"/user/:id"} element={<UserDetail />} />
        {/* 指定していないURLのリクエストがあった場合は404コンポーネントを返す */}
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
