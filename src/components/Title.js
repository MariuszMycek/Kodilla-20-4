import React from "react";
import style from "./Title.css";

const Title = props => {
  const taskQuantity =
    props.data.length == 0
      ? `${style.taskQuantity} ${style.zeroQuantity}`
      : style.taskQuantity;
  const yet = props.data.length == 0 ? "yet..." : "It's time Todo something!";
  return (
    <div className={style.header}>
      <h1>Todo app</h1>
      <p>
        You have <span className={taskQuantity}>{props.data.length}</span>{" "}
        things to do... {yet}
      </p>
    </div>
  );
};

export default Title;
