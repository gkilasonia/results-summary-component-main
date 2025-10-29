import React from "react";
import "../styles/mainStyle.css";
import "../styles/FinalScoreCardStyle.css";

function FinalScoreCard() {
  return (
    <section className="resultContainer">
      <h1 className="resultHeader">Your Result</h1>
      <div className="scoreContainer">
        <p className="score">76</p>
        <p className="outOfText">of 100</p>
      </div>
      <div className="feedbackContainer">
        <p className="feedbackHeadline">Great</p>
        <p className="feedback">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </section>
  );
}

export default FinalScoreCard;
