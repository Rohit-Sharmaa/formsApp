import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header.js/header";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/formA" element={<Form formType="A" />} />
            <Route path="/formB" element={<Form formType="B" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
