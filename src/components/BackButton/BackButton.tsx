import { BackIcon } from "../../assets";
import "./BackButton.scss";

const BackButton = () => {
  return (
    <button className="backButton">
      <BackIcon />
      Go Back
    </button>
  );
};

export default BackButton;
