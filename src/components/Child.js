import React from "react";

export default function Child({num}) {
  console.log("child component render");
  return (
    <>
      <div>Child</div>
      <p>{`Number : ${num}`}</p>
    </>
  );
}
