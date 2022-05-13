import React, { useState } from "react";
import Parent from "./Parent";

export default function App() {
  const [first, setfirst] = useState(0);
  return (
    <>
      <button onClick={() => setfirst(first + 1)}>chan:state in App</button>
      <div>App</div>
      <Parent first={first} />
    </>
  );
}
