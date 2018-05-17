import React from "react";

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      sort: "name",
      greased: false
    };
  }

  handleCheck = e => {
    this.setState({
      greased: e.target.checked
    });
  };

  handleSelect = e => {
    this.setState({
      sort: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props);
    this.props.handleSubmit(this.state.sort, this.state.greased);
  };

  render() {
    // console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <select onChange={this.handleSelect}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
        <br />
        <input onChange={this.handleCheck} type="checkbox" />Greased
        <br />
        <button>Submit</button>
      </form>
    );
  }
}

export default Filter;
