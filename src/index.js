import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Features from "./pages/Features";
import Send from "./pages/Send";
import Receive from "./pages/Receive";
import Contact from "./pages/Contactus";
import reportWebVitals from "./reportWebVitals";
import About from "./pages/Aboutus";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/feat" element={<Features />} />
      <Route path="/Send" element={<Send />} />
      <Route path="/Receive" element={<Receive />} />
      <Route path="/cont" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>,
  document.getElementById("root"),
);

reportWebVitals();
