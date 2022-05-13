import React, { useState } from "react";
import Child, { ChildMemmo } from "./Child";
import Parent from "./Parent";
import { ParentContext } from "./pc";

export default function App() {
  const [first, setfirst] = useState(0);
  console.log("render App");

  return (
    <>
      <strong>App</strong>
      <button onClick={() => setfirst(first+1)}>btn at app state chage</button>
      <Parent
        children={
          <ParentContext.Provider value={first}>
            <Child />
          </ParentContext.Provider>
        }
      />
    </>
  );
}
