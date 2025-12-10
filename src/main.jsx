import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FinalScoreCard from "./components/FinalScoreCard.jsx";
import SingularScoreForm from "./components/SingularScoreForm.jsx";
import Button from "./components/Button.jsx";
import "./styles/mainStyle.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="background">
      <div className="mainContainer">
        <FinalScoreCard />
        <div className="summaryContainer">
          <h1 className="summaryHeader">Summary</h1>
          <SingularScoreForm />
          <Button />
        </div>
      </div>
    </div>
  </StrictMode>
);
