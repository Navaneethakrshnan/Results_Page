import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RaceResults from "./components/RaceResults";
import SingleResult from "./components/SingleResult";
import RegistrationLanding from "./components/RegistrationLanding";
import RegistrationPage from "./components/RegistrationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<RegistrationLanding />} />
        <Route path="/results" element={<RaceResults />} />
        <Route path="/single_result" element={<SingleResult />} />
        <Route path="/registration_page" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
