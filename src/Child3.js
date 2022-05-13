import React, { useContext } from "react";
import { useParentContextFun } from "./pc";

export default function Child3() {
  let valueFromparent = useParentContextFun();

  console.log("render child-3");
  return <div>Child3:{valueFromparent}</div>;
}
