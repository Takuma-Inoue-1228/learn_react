// react-router-domでBrowserRouter・Routes・Routeを使用するための宣言をする
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ヘッダーをコンポーネント化して全ての画面で使えるようにした
import { Header } from "./components/Header";

// 各コンポーネントをインポートとして使えるようにする
import { Top } from "./components/Top";
import { TodoPage } from "./components/TodoPage";
import { CountPage } from "./components/CountPage";
import { RandomImagePage } from "./components/RandomImagePage";
import { UserPage } from "./components/UserPage";
import { UserDetailPage } from "./components/UserDetailPage";
import { NotFound } from "./components/404";

function App() {
  return (
    //   リンク先の各ページを記述
    <BrowserRouter>
      {/* Headerコンポーネントを呼び出す */}
      <Header />
      <Routes>
        {/* 〜/のURLはTOPコンポーネントを描画するように設定 */}
        <Route path={"/"} element={<Top />} />
        {/* 各コンポーネントを描画するリンク先 */}
        <Route path={"/todo"} element={<TodoPage />} />
        <Route path={"/count"} element={<CountPage />} />
        <Route path={"/random_image"} element={<RandomImagePage />} />
        <Route path={"/user"} element={<UserPage />} />
        {/* user/〜に値が入っていた場合はUserDetailのコンポーネントを描画 */}
        <Route path={"/user/:id"} element={<UserDetailPage />} />
        {/* 指定していないURLのリクエストがあった場合は404コンポーネントを返す */}
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
