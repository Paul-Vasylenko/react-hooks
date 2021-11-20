import "./App.css";
import useInput from "./hooks/useInput";
import Hover from "./components/Hover";
import List from "./components/List";
import { useState } from "react";
import useDebounce from "./hooks/useDebounce";
import axios from "axios";
import useRequest from "./hooks/useRequest";

function App() {
  const { value, onChange } = useInput("");
  const [v, setV] = useState("");
  const debouncedFunction = useDebounce(fetchTodos, 500);
  function onChange2(e) {
    setV(e.target.value);
    debouncedFunction(e.target.value);
  }
  const [todos, loading, error] = useRequest(fetchTodos);

  function fetchTodos(query) {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`);
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>An error has occured</h1>;
  }

  return (
    <div>
      <input placeholder="Debouce check!" value={v} onChange={onChange2} />
      <input value={value} onChange={onChange} />
      <Hover />
      {/* <List /> */}
    </div>
  );
}

export default App;
