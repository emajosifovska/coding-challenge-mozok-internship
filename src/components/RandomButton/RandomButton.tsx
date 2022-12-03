import { DiceIcon } from "../../assets";
import "./RandomButton.scss";

const RandomButton = () => {
  return (
    <button className="randomButton">
      Random Cat Fact
      <DiceIcon />
    </button>
  );
};

export default RandomButton;
