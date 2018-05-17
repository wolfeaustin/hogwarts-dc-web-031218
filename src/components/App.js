import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import Filter from "./Filter";
import PigPen from "./PigPen";
import hogs from "../porkers_data";

class App extends Component {
  constructor() {
    super();

    this.state = {
      pigs: hogs,
      sorted: null,
      greased: null
    };
  }

  handleSubmit = (sort, greased) => {
    // console.log(sort === "name");
    sort === "name"
      ? this.setState({
          sorted: sort,
          greased: greased
        })
      : this.setState({
          sorted:
            "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water",
          greased: greased
        });
  };

  cultivatePigs = () => {
    console.log(this.state.sorted);
    return this.state.greased === null
      ? this.state.pigs
      : this.state.pigs
          .filter(pig => pig.greased === this.state.greased)
          .sort((a, b) => {
            return a[this.state.sorted] > b[this.state.sorted];
          });
  };
  render() {
    console.log(this.cultivatePigs());
    return (
      <div className="App">
        <Nav />
        <Filter handleSubmit={this.handleSubmit} />
        <PigPen pigs={this.cultivatePigs()} />
      </div>
    );
  }
}

export default App;
