import React from "react";

export default function Child() {
  console.log("child component render");
  return (
    <>
      <div>Child</div>
      {/* <p>{`Number : ${number}`}</p> */}
    </>
  );
}
