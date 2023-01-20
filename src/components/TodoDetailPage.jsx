import { Link, useParams } from "react-router-dom";

export const TodoDetailPage = () => {
  // URLとして/user/〜に入力されている値をparams変数に受け取る
  const params = useParams();
  console.log(params);

  return (
    <>
      <h2>ToDo詳細画面</h2>
      <p>
        選択されたToDo番号:
        <span className="pl-4">{params.id}</span>
      </p>
    </>
  );
};