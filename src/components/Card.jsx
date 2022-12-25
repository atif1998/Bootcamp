import React from "react";
import Counters from "./Counters";

export const Card = ({ card, color }) => {
  let { title, subTitle, description, id, value } = card;
  let classes = `card ${color}`;
  return (
    <div className={classes}>
      <h5>{title}</h5>
      <h6>{subTitle}</h6>
      <h6>{id}</h6>
      <h6>{value}</h6>
      <p>{description}</p>
      <Counters />
    </div>
  );
};
export default Card;
