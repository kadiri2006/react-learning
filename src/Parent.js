import React, { createContext, useContext, useState } from "react";
import Child from "./Child";

export default function Parent({ children }) {
  const [first, setfirst] = useState(0);
  const ParentContext = createContext(null);
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
