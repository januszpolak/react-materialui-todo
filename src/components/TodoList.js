import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return <Todo key={todo.title} title={todo.title} />;
      })}
    </div>
  );
};

export default TodoList;
