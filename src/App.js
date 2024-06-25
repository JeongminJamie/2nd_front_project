import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductDetail from "../src/ProductDetail/ProductDetail";
import Mainhome from "./Mainhome";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Mainhome />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product-detail" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
