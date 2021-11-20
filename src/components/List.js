import React, { useState, useEffect, useRef } from "react";
import useScroll from "./../hooks/useScroll";

function List() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 20;
  function fetchTodos(page, limit) {
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
    )
      .then((response) => response.json())
      .then((json) => {
        setTodos((prev) => [...prev, ...json]);
        setPage((prev) => prev + 1);
      });
  }

  const parentRef = useRef();
  const childRef = useRef();

  useScroll(parentRef, childRef, () => fetchTodos(page, limit));

  return (
    <div ref={parentRef} style={{ height: "80vh", overflow: "auto" }}>
      {todos.map((todo) => (
        <p style={{ padding: 30, border: "1px solid black" }}>
          {todo.id}. {todo.title}
        </p>
      ))}
      <div
        ref={childRef}
        style={{ width: "100%", background: "green", height: 30 }}
      ></div>
    </div>
  );
}

export default List;
