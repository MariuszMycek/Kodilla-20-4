import React from "react";
import style from './TodoForm.css'

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  onSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.text);
  };
  onChangeHandle = event => {
    this.setState({ text: event.target.value });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} className={style.TodoForm}>
        <label htmlFor="text">Add new task: </label>
        <input className={style.TodoForm__textInput}
          type="text"
          id="text"
          onChange={this.onChangeHandle}
          value={this.state.text}
          placeholder="New task"
        />
        <input type="submit" value="Add" className={style.TodoForm__submitInput}/>
      </form>
    );
  }
}

export default TodoForm;
