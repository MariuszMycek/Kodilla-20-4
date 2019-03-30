import React from "react";
import style from "./TodoList.css";

const TodoList = props => {
  const todoList = props.data.map(dataItem => {
    return (
      <div className={style.listItem}
        key={dataItem.id}
        onClick={() => {
          props.remove(dataItem.id);
        }}
      >
        {dataItem.text}
      </div>
    );
  });
  return <div>{todoList}</div>;
};

export default TodoList;
