import React, { useState } from "react";
import "./Card.css";
import Card from "./Card";

function Cards(props) {
  const [cardList] = useState([
    {
      id: 0,
      title: "Card title",
      subTitle: "Dalda Ghee",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 1,
      title: "Card title 1",
      subTitle: "Hockey",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 2,
      title: "Card title 2",
      subTitle: "Football",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 3,
      title: "Card title 3",
      subTitle: "Circket Bat",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 4,
      title: "Card title 4",
      subTitle: "Card subtitle 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ]);
  const [counterList] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  return (
    <div>
      <h2>CardExamples</h2>
      {cardList.map((card, index) => (
        <div className="mb-2" key={index}>
          <Card card={card} color={index % 2 === 0 ? "red" : "blue"} />
        </div>
      ))}
      {counterList.map((id, index) => (
        <div className="mb-2" key={index}>
          <Card card={id} />
        </div>
      ))}
      {counterList.map((value, index) => (
        <div className="mb-2" key={index}>
          <Card card={value} />
        </div>
      ))}
    </div>
  );
}

export default Cards;
