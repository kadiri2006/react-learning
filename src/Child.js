import React from "react";
import Child2 from "./Child2";

export default function Child() {
  console.log("render child");
  return (
    <>
      <div>Child 1</div>;
      <Child2 />
    </>
  );
}

export const MemoChild = React.memo(Child);
