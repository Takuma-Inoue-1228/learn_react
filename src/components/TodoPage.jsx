import { useState } from "react";

export const TodoPage = () => {
  // デフォルトのtodo
  const initialState = [
    {
      task: "Learn vue.js",
      isCompleted: false,
    },
    {
      task: "Learn React Hook",
      isCompleted: false,
    },
    {
      task: "Learn Gatsby.js",
      isCompleted: false,
    },
  ];
  // インプットエリアに入力されたtodo
  const [task, setTask] = useState("");

  // todoのリスト
  const [todos, setTodos] = useState(initialState);

  // インプットエリアに文字が入力されたらtaskを更新する
  const handleNewTask = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    //画面がリロードされてしまうと値が消えてしまうため、ページが更新されないようにする
    event.preventDefault();
    //   入力値が空欄だったら処理を終了
    if (task === "") return;
    //   インプットエリアに入力された値をtodosに追加
    setTodos((todos) => [...todos, { task, isCompleted: false }]);
    //   インプット欄を空欄にする
    setTask("");
  };

  return (
    <div>
      <h2>ToDo List</h2>
      <form onSubmit={handleSubmit}>
        Add Task :
        <input
          value={task}
          placeholder="Add New Task"
          onChange={handleNewTask}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};
