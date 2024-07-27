import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RaceResults from "./components/RaceResults";
import SingleResult from "./components/SingleResult"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<RaceResults />} />
        <Route path="/single_result" element={<SingleResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
