import React from "react";

function Child({ num }) {
  console.log("child component render");
  return (
    <>
      <div>Child</div>
      <p>{`Number : ${num}`}</p>
    </>
  );
}

export const MemoChild = React.memo(Child);
