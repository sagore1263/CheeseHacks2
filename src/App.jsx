import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import LoggedInPage from "./LoggedInPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/logged-in" element={<LoggedInPage />} />
      </Routes>
    </Router>
  );
}

export default App;

