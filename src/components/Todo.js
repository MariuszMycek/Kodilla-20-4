import React from "react";
import style from "./Todo.css";

const Todo = props => {
  const remove = () => props.remove(props.data.id);
  return (
    <div className={style.Todo} onClick={remove}>
      {props.data.text}
    </div>
  );
};

export default Todo;
