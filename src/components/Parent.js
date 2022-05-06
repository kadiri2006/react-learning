import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import "../styles/parent.css";

export default function Parent() {
  const [par, setPar] = useState(0);
  console.log("render in parent ");
  return (
    <div className="parent">
      <button onClick={() => setPar(0)} className="mr">
        setvalue to "0" in parent;value-{par}
      </button>
      <button onClick={() => setPar((par) => par + 1)} className="mr">
        increment in parent;value-{par}
      </button>

      <button onClick={() => setPar(3)}>
        setvalue to "3" in parent;value-{par}
      </button>
      <Child1 />
      <Child2 />
    </div>
  );
}
