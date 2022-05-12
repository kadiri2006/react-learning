import React, { useState } from "react";


export default function Parent({children}) {
  const [change, setChange] = useState(0);
  console.log("parent componet render");
  return (
    <>
      <h1>parent component</h1>
      <button onClick={() => setChange(change + 1)}>stateChange</button>
      {children}
    </>
  );
}
