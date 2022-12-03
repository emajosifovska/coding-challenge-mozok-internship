import "./RandomFactCard.scss";

const RandomFactCard = ({ randomFact }: any) => {
  return (
    <div className="randomFactContainer">
      <span>Random Cat Fact</span>
      <h2>❝{randomFact}❞</h2>
    </div>
  );
};

export default RandomFactCard;
