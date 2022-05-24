import axios from "axios";
import { useEffect, useState } from "react";

export default function Test() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.rapidmock.com/mocks/Q97DX", {
        headers: {
          "x-rapidmock-delay": 100,
        },
      });
      let data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  console.log(data);
  return (
    <>
      <p>test</p>

      {data.length > 0 ? data.map((d) => <li key={d.id}>{d.title}</li>) : null}
    </>
  );
}
