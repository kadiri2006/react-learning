import React from "react";

export default function HOC(Wc, entity) {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        modifiedData: [],
        filteredData: [],
      };
    }

    componentDidMount() {
      let getData = async () => {
        let jsonData = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        let originalData = await jsonData.json();

        let fetchedData = [];
        originalData.forEach((e) => fetchedData.push(e.title));
        this.setState({ modifiedData: fetchedData, filteredData: fetchedData });
      };

      getData();

      //   this.setState({ modifiedData: ["bharath"] });
    }

    doFiltering(e) {
      let filteredData = this.state.modifiedData.filter((d) =>
        d.toLowerCase().startsWith(e.target.value)
      );
      this.setState({ ...this.state, filteredData });
    }

    render() {
      return (
        <>
          <div className="myFlexChild">
            <h1>i am from higher Component</h1>
            <input
              type="text"
              placeholder="typer here"
              onChange={(e) => this.doFiltering(e)}
            />
            <Wc data={this.state} />
          </div>
        </>
      );
    }
  };
}
