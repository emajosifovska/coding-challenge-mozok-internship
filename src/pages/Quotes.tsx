import { Link } from "react-router-dom";
import QuoteCard from "../components/QuoteCard/QuoteCard";
import RandomQuoteButton from "../components/RandomQuoteButton/RandomQuoteButton";
import "./style.scss";

const Quotes = () => {
  return (
    <div className="container">
      <Link to="/random-quote">
        <RandomQuoteButton />
      </Link>
      <div className="quotes">
        <QuoteCard />
        <QuoteCard />
        <QuoteCard />
        <QuoteCard />
        <QuoteCard />
        <QuoteCard />
        <QuoteCard />
        <QuoteCard />
        <QuoteCard />
        <QuoteCard />
        <QuoteCard />
      </div>
    </div>
  );
};

export default Quotes;
