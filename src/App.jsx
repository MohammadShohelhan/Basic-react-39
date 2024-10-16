import { useState } from "react";

import "./App.css";
import Team from "./components/Team";
import Users from "./components/Users";
import Friends from "./components/Friends";

function App() {
  const [count, setCount] = useState(0);

  const counter = () => {
    const update = count + 5;
    setCount(update);
  };

  const decrice = () => {
    const update = count - 10;
    update > 0 ? setCount(update) : setCount(0);
  };
  console.log(count);
  return (
    <>
      <Friends />
      <h1>Number: {count}</h1>
      <button onClick={counter}>click me</button>
      <button onClick={decrice}>decrice me</button>
      <Team />
      <Users />
    </>
  );
}

export default App;
