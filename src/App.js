import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Play game",
      iscompleted: false,
    },
    {
      id: 2,
      title: "Go a walk",
      iscompleted: false,
    },
  ]);
  const styles = {
    div: {
      background: "#dfe6e9",
      minHeight: "100vh",
    },
  };

  const addTodo = (text) => {
    const newTodo = {
      id: text.title,
      title: text,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <div className="App" style={styles.div}>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
