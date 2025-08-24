import { render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders initial todos", () => {
  render(<App />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText("Add todo"), {
    target: { value: "New Task" },
  });
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<App />);
  const todoItem = screen.getByText("Learn React");
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<App />);
  const todoItem = screen.getByText("Learn React").closest("li"); 
  const deleteButton = within(todoItem).getByText("Delete");      
  fireEvent.click(deleteButton);
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
