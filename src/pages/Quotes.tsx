import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Store } from "../store";
import { fetchQuotes } from "../actions/quotesActions";
import { QuotesActions } from "../action-types/quotesActionsTypes";
import RandomQuoteButton from "../components/RandomButton/RandomButton";
import QuoteCard from "../components/QuoteCard/QuoteCard";
import Loading from "../components/Loading/Loading";
import "./style.scss";

const Quotes = () => {
  const loading = useSelector((state: Store) => state.allQuotes.loadingQuotes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuotes() as QuotesActions);
  }, [dispatch]);

  return (
    <div className="quotesContainer">
      <Link to="/random-quote">
        <RandomQuoteButton />
      </Link>
      <div className="quotes">{loading ? <Loading /> : <QuoteCard />}</div>
    </div>
  );
};

export default Quotes;
