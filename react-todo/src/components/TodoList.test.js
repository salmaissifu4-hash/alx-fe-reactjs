import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

// eslint-disable-next-line no-undef
describe("TodoList Component", () => {
  // eslint-disable-next-line no-undef
  test("renders initial todos", () => {
    render(<TodoList />);
    // eslint-disable-next-line no-undef
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    // eslint-disable-next-line no-undef
    expect(screen.getByText("Build a project")).toBeInTheDocument();
  });

  // eslint-disable-next-line no-undef
  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByTestId("todo-input");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

    // eslint-disable-next-line no-undef
    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  // eslint-disable-next-line no-undef
  test("toggles a todo's completion status", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    fireEvent.click(todoItem);
    // eslint-disable-next-line no-undef
    expect(todoItem).toHaveClass("completed");

    fireEvent.click(todoItem);
    // eslint-disable-next-line no-undef
    expect(todoItem).not.toHaveClass("completed");
  });

  // eslint-disable-next-line no-undef
  test("deletes a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");
    const deleteButton = todoItem.nextSibling;

    fireEvent.click(deleteButton);

    // eslint-disable-next-line no-undef
    expect(todoItem).not.toBeInTheDocument();
  });
});
