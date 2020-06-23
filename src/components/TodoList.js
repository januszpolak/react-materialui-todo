import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, checkTodo, id, isCompleted }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            checkTodo={checkTodo}
            id={todo.id}
            isCompleted={todo.isCompleted}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
