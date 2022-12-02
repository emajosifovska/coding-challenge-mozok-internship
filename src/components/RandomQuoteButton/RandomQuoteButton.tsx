import { DiceIcon } from "../../assets";
import "./RandomQuoteButton.scss";

const RandomQuoteButton = () => {
  return (
    <button className="randomQuoteButton">
      Random Quote
      <DiceIcon />
    </button>
  );
};

export default RandomQuoteButton;
