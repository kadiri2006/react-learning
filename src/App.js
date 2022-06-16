import React from "react";

import { PostHOC } from "./Posts";
import { TodosHOC } from "./Todos";
import "./styles/App.css";

export default function App() {
  return (
    <div className="myFlex">
      <PostHOC />
      <TodosHOC />
    </div>
  );
}
