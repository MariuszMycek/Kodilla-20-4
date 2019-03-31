import React from "react";
import uuid from "uuid";
import style from "./App.css";
import Title from "../components/Title";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { hot } from "react-hot-loader";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  addTodo = val => {
    const todo = {
      text: val || "Task without a name... remove me!",
      id: uuid.v4()
    };
    const data = [...this.state.data, todo];
    this.setState({ data });
  };
  removeTodo = id => {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({ data: remainder });
  };
  render() {
    return (
      <div className={style.TodoApp}>
        <Title data={this.state.data} />
        <TodoForm addTodo={this.addTodo} />
        <TodoList data={this.state.data} remove={this.removeTodo} />
      </div>
    );
  }
}

export default hot(module)(App);
