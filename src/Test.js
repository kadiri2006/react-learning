import { useEffect, useState } from "react";

export default function Test() {
  const [num, setNum] = useState(1);

  useEffect(() => {
    setInterval(() => {
      console.log("log at inside of interval", num);
      setNum((e) => {
        console.log("log at inside of setter",e);
        return e + 1;
      });
    }, 5000);
  }, []);
  console.log("log at outside of useEffect", num);
  return (
    <>
      <p>test</p>
      <p>{num}</p>
    </>
  );
}
