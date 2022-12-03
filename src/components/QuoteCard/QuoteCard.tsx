import { useSelector } from "react-redux";
import { Store } from "../../store";
import { Quote } from "../../@types/types";
import "./QuoteCard.scss";

const QuoteCard = () => {
  const quote = useSelector((state: Store) => state.allQuotes.quote);
  return (
    <>
      {quote?.quotes.map((quote: Quote, i: number) => {
        return (
          <div className="cardContainer" key={i}>
            <span>QUOTE #{i + 1}</span>
            <h3>❝{quote?.quote}❞</h3>
            <p>{quote?.author}</p>
          </div>
        );
      })}
    </>
  );
};

export default QuoteCard;
