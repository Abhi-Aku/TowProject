import React from "react";
import Home from "./Components/Home"; 
import PdfForm from "./Components/PdfForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pdf" element={<PdfForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;