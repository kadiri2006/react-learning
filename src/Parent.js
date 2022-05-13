import React, { createContext, useContext, useState } from "react";
import Child, { ChildMemmo } from "./Child";
import Child2 from "./Child2";
import { ParentContext } from "./pc";

export default function Parent({ children }) {
  const [first, setfirst] = useState(0);

  console.log("render parent");

  return (
    <>
      <div>Parent</div>
      <button onClick={() => setfirst(first + 1)}>
        Parent btn state change
      </button>
      <ParentContext.Provider value={first}>
        <Child />
      </ParentContext.Provider>
    </>
  );
}
