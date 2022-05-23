import { useState } from "react";
import Test from "./Test";
import Test2 from "./Test2";



export default function App() {
  const [first, setfirst] = useState({ value: true });
  return (
    <>
      <button onClick={() => setfirst({ value: !first.value })}>
        Toggle Compounent
      </button>
      {first.value ? <Test /> : <Test2 />}
    </>
  );
}
