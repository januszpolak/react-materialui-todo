import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const styles = {
    div: {
      background: "#dfe6e9",
      minHeight: "100vh",
    },
  };

  const addTodo = (text) => {
    const newTodo = {
      id: Math.random(),
      title: text,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const checkTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App" style={styles.div}>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
