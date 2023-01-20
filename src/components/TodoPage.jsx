import { Link } from "react-router-dom";

// todoの配列を定義
const DEFAULT_TODO = [
  { id: 1, todoTitle: "水を飲む" },
  { id: 2, todoTitle: "ご飯を食べる" },
  { id: 3, todoTitle: "片付ける" },
];

// map関数でイテレートする
// 定義済みのDEFAULT_TODOオブジェクトのtodoTitleをtodo変数に入れていく
const todoLists = DEFAULT_TODO.map((todo) => todo.todoTitle);
console.log(todoLists);

// 新しく配列を定義する
const array = ["item1", "item2", "item3"];
// 新しく定義した配列を使ってliタグを付与した配列をを作っていく
const listItems = array.map((item) => `<li>${item}</li>`);
console.log(listItems);

export const TodoPage = () => {
  return (
    <>
      <ul>
        {todoLists.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <br />
      <ul>
        {todoLists.map((todo, x) => (
          <li key={x}>{todo}</li>
        ))}
      </ul>
      <br />
      <ul>
        {[...Array(5)].map((d, i) => (
          <li key={i}>
                
                <Link to={`/todo/${i + 1}`}>{`todo${i +1 }` }</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
