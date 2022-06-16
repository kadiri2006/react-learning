import React from "react";
import HOC from "./HOC";

function Posts(props) {
  let renderData = props.data.filteredData.map((d, i) => {
    return (
      <ul key={i}>
        <li>
          {i + 1}-{d}
        </li>
      </ul>
    );
  });

  return <div>{renderData}</div>;
}

let PostHOC = HOC(Posts, "posts"); //check once
export { PostHOC };
