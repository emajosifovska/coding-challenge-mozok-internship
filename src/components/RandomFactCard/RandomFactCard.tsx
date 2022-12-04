import "./RandomFactCard.scss";

const RandomFactCard = ({ randomFact }: any) => {
  return (
    <div className="randomFactContainer">
      <span>Random Cat Fact &#x1F431;</span>
      <h2>❝{randomFact}❞</h2>
    </div>
  );
};

export default RandomFactCard;
