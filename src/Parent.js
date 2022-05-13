import React from "react";
import { MemoChild } from "./Child";
import Child2 from "./Child2";

export default function Parent({ first }) {
  console.log("render parent", first);
  return (
    <>
      <div>Parent</div>
      <MemoChild>
        <Child2 />
      </MemoChild>
    </>
  );
}
