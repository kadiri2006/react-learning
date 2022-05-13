import React from "react";


export default function Child({children}) {
  console.log("render child");
  return (
    <>
      <div>Child 1</div>;
      {children}
    </>
  );
}

export const MemoChild = React.memo(Child);
