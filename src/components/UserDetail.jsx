import { Link, useParams } from "react-router-dom";

const UserDetail = () => {
  // URLとして/user/〜に入力されている値をparams変数に受け取る
  const params = useParams();
  console.log(params);

  return (
    <>
      <h2>ユーザ詳細画面</h2>
      <p>
        選択されたユーザ番号:
        <span className="pl-4">{params.id}</span>
      </p>
      <footer>
        <Link to={"/"}>トップに戻る</Link>
      </footer>
    </>
  );
};

export default UserDetail;
