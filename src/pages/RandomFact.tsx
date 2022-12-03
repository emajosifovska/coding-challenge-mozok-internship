import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import RandomFactCard from "../components/RandomFactCard/RandomFactCard";
import BackButton from "../components/BackButton/BackButton";
import "./style.scss";

const RandomFact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [randomFact, setRandomFact] = useState("");

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => {
        setIsLoading(true);
        return res.json();
      })
      .then((data) => {
        setRandomFact(data.fact);
        setIsLoading(false);
      });
  }, [setIsLoading]);
  return (
    <div className="factContainer">
      {isLoading ? <Loading /> : <RandomFactCard randomFact={randomFact} />}
      <Link to="/quotes">
        <BackButton />
      </Link>
    </div>
  );
};

export default RandomFact;
