import React from "react";
// import hogPics from "../porco.png";
// import hogPics from "../hog-imgs";
// import "semantic-ui";
// import semantic from "semantic-ui";

class Pig extends React.Component {
  constructor() {
    super();
    this.state = {
      flipped: false
    };
  }

  slugIt = name => {
    return name.toLowerCase().replace(/ /g, "_");
  };
  handleClick = pigId => {
    console.log(this.state.flipped);
    this.setState({
      flipped: !this.state.flipped
    });
  };

  render(props) {
    return (
      <div>
        {this.state.flipped === false ? (
          <ul onClick={this.handleClick}>
            <li>{this.props.pig.name}</li>
            <li>
              <img
                alt={this.props.pig.name}
                src={require(`../hog-imgs/${this.slugIt(
                  this.props.pig.name
                )}.jpg`)}
              />
            </li>
            <li>
              {
                this.props.pig[
                  "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
                ]
              }
            </li>
          </ul>
        ) : (
          <ul onClick={this.handleClick}>
            <li>{this.props.pig.specialty}</li>
            <li>{String(this.props.pig.greased)}</li>
            <li>
              {
                this.props.pig[
                  "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
                ]
              }
            </li>
            <li>{this.props.pig["highest medal achieved"]}</li>
          </ul>
        )}
      </div>
    );
  }
}
export default Pig;
