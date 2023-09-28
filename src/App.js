import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from './Components/Sidebar';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Home from "./Components/Home";
import Favourites from "./Components/Favourites";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contacts";

function App() {
  return (
    <Router>
      <div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
