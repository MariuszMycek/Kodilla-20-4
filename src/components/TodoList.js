import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  const todoList = props.data.map(itemData => {
    return <Todo key={itemData.id} remove={props.remove} data={itemData} />;
  });
  return <div>{todoList}</div>;
};

export default TodoList;
