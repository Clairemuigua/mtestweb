// Favorites.js

import React from 'react';

const Favourites = ({ favoriteMemes }) => {
  return (
    <div>
      <h1 className='text-center text-fuchsia-800 text-5xl md:italic'>Favorites Page</h1>
      <ul>
        {favoriteMemes.map((meme) => (
          <li key={meme.id}>
            <img src={meme.url} alt="Favorite Meme" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favourites;
