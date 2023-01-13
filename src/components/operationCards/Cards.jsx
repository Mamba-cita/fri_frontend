import React from "react";
import "./Cards.css";
import { OperationCardsData } from "../../data/data";
import Card from "./Card";

export default function Cards() {
  return (
    <div className="cards">
      {OperationCardsData.map((card, id) => {
        return (
          <div className="parentContainer">
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
}
