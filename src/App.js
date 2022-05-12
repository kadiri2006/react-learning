import React, { useState } from "react";
import Child from "./components/Child";
import Parent from "./components/Parent";

export default function App() {
  const [first, setfirst] = useState(0);

  return (
    <>
      <button onClick={() => setfirst(first + 1)}>increment in App</button>
      <Parent>
        <Child />
      </Parent>
    </>
  );
}
