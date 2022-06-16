import { useEffect, useState } from "react";

export default function App() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    let getData = async () => {
      let jsonData = await fetch("https://jsonplaceholder.typicode.com/posts");
      let originalData = await jsonData.json();

      let data = [];
      originalData.forEach((e) => data.push(e.title));
      setAllData(data);
      let mappingData = data.map((d, i) => (
        <ul key={i}>
          <li>{d}</li>
        </ul>
      ));
      setFilteredData(mappingData);
    };

    getData();
  }, []);

  let getFilteredData = (e) => {
    let filterd = allData
      .filter((v) => v.toLowerCase().startsWith(e.target.value.toLowerCase()))
      .map((d, i) => {
        return (
          <ul key={i}>
            <li>{d}</li>
          </ul>
        );
      });

    setFilteredData(filterd);
  };

  return (
    <>
      <input
        type="text"
        placeholder="filter out"
        onChange={(e) => getFilteredData(e)}
      />
      {filteredData}
    </>
  );
}
