import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import "../styles.css";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: false },
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <AddTodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            className={todo.completed ? "completed" : ""}
            data-testid="todo-item"
          >
            {todo.text}
            <button onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
