import { StrictMode, React } from "react";
import { createRoot } from "react-dom/client";
import FinalScoreCard from "./components/FinalScoreCard";
import SingularScoreForm from "./components/SingularScoreForm";
import Button from "./components/Button";
import "./styles/mainStyle.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="background">
      <div className="mainContainer">
        <FinalScoreCard />
        <div className="summaryContainer">
          <h2 className="summaryHeader">Summary</h2>
          <SingularScoreForm />
          <Button />
        </div>
      </div>
    </div>
  </StrictMode>
);
