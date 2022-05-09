import React, { useReducer } from "react";

export default function UsereducerComponent() {
  let myState = {
    name: "ragu",
    age: 18,
    qualification: "b.tech",
  };

  const [initialState, dispatch] = useReducer(reducer, myState);
  console.log(initialState);

  function reducer(state, action) {
    switch (action) {
      case "below18":
        return { ...state, age: 15 };
        break;
      case "above18":
        return { ...state, age: 25 };
        break;

      default:
        return initialState;
        break;
    }
  }

  let above18 = () => dispatch("above18");
  let below18 = () => dispatch("below18");
  let def = () => dispatch("");
  console.log("render at usereducer component");
  return (
    <>
      <div>UsereducerComponent</div>
      <button onClick={above18}>above 18</button>
      <button onClick={below18}>below 18</button>
      <button onClick={def}>default</button>
      <p>{initialState.age}</p>
    </>
  );
}
