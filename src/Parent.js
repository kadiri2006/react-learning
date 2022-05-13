import React, {useState } from "react";

export default function Parent({ children }) {
  const [first, setfirst] = useState(0);
  console.log("render parent");

  return (
    <>
      <div>Parent</div>
      <button onClick={() => setfirst(first + 1)}>
        Parent btn state change
      </button>
      {children}
    </>
  );
}
