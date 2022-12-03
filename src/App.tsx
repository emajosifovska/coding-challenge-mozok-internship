import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quotes from "./pages/Quotes";
import RandomFact from "./pages/RandomFact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Quotes />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/random-quote" element={<RandomFact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
