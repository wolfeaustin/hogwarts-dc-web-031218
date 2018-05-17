import React from "react";
import Pig from "./Pig";

const PigPen = props => {
  return <div>{props.pigs.map((pig, i) => <Pig key={i} pig={pig} />)}</div>;
};

export default PigPen;
