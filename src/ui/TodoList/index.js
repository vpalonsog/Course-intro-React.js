import React from "react";
import "./TodoList.css";
import { render } from "@testing-library/react";

function TodoList(props) {
  const renderFunc = props.children || props.render;
  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {!props.loading && !props.totalTodos.length && props.onEmptyTodos()}

      {!!props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmtpySearchResults(props.searchText)}

      {!props.loading && !props.error && props.searchedTodos.map(renderFunc)}
    </section>
  );
}

export { TodoList };
