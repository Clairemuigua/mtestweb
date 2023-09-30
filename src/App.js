import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Home from './Components/Home';
import Favourites from './Components/Favourites';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contacts';

function App() {
  // Define a state to store favorite memes
  const [favoriteMemes, setFavoriteMemes] = useState([]);

  // Define the function to add a meme to favorites
  const addFavoriteMeme = (meme) => {
    // Check if the meme is already in favorites to avoid duplicates
    if (!favoriteMemes.some((favorite) => favorite.id === meme.id)) {
      setFavoriteMemes([...favoriteMemes, meme]);
    }
  };

  return (
    <Router>
      <div>
        <Sidebar />
        <Routes>
        <Route path="/" element={<Home addFavoriteMeme={addFavoriteMeme} />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/favourites"
            element={<Favourites favoriteMemes={favoriteMemes} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
