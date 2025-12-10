import React from "react";
import data from "../data/data.json";
import "../styles/SingularScoreFormStyle.css";

function SingularScoreForm() {
  return (
    <section className="summaryContentContainer">
      {data.map((item) => (
        <div
          key={item.id}
          className="summaryItem"
          style={{ backgroundColor: item.backgroundColor }}
        >
          <div className="summaryItemLabel">
            <img src={item.icon} alt="" />
            <h2 className="itemHeader" style={{ color: item.itemColor }}>
              {item.category}
            </h2>
          </div>
          <p className="summaryItemScore">
            {item.score} <span className="outOf"> / 100</span>
          </p>
        </div>
      ))}
    </section>
  );
}

export default SingularScoreForm;
