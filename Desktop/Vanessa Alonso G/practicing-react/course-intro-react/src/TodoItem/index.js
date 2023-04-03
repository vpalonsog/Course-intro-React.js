import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${
          props.completed && "Icon-check--active"
        } fas fa-undo todo-undo": "check fas fa-check`}
        onClick={props.onComplete}
      ></span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete delete-todo fas fa-trash"
        onClick={props.onDelete}
      ></span>
    </li>
  );
}

export { TodoItem };
