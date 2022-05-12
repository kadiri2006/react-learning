import React from "react";

function Child({ num }) {
  console.log("child component render");
  return (
    <>
      <div>Child</div>
      <p>{`Number : ${num.value}`}</p>
    </>
  );
}

export const MemoChild = React.memo(Child);
