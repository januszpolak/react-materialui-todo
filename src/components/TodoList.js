import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, checkTodo, id, isCompleted, deleteTodo }) => {
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
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
