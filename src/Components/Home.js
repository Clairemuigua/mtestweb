import React, { useEffect, useState } from 'react';

const Home = ({ addFavoriteMeme }) => {
  const [memeUrls, setMemeUrls] = useState([]); // Store meme URLs in an array
  const [currentMemeIndex, setCurrentMemeIndex] = useState(0);

  useEffect(() => {
    displayRandomMemes();
  }, []);

  function displayRandomMemes() {
    const memeSources = [
      'https://api.memegen.link/images/buzz/memes/memes_everywhere.gif',
      'https://api.memegen.link/images/doge/so_doge.png',
      'https://api.memegen.link/images/aint-got-time/memes~q/aint_nobody_got_time_fo_that.png',
     ' https://api.memegen.link/images/astronaut/Wait,_its_round~q/Always_has_been/Flat_Earther/Science.png',
    'https://api.memegen.link/images/atis/and_then_i_said/the_exam_will_only_contain_what_weve_covered_in_lectures.png',
    'https://api.memegen.link/images/away/life.../finds_a_way.png'

      // Add more meme URLs to this array
    ];

    const promises = memeSources.map((source) =>
      fetch(source)
        .then((response) => response.url)
        .catch((error) => {
          console.error("Error fetching meme", error);
          return null; // Return null for failed requests
        })
    );

    Promise.all(promises)
      .then((urls) => {
        const validUrls = urls.filter((url) => url !== null);
        if (validUrls.length > 0) {
          setMemeUrls(validUrls);
        }
      });
  }

  const addToFavorites = (url) => {
    addFavoriteMeme({ id: Date.now(), url });
  };

  const cardStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '500px',
    // Adjust the width as needed
  };

  const memeContainerStyle = {
    marginBottom: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  
  const contentStyle = {
    marginLeft: '250px', // Adjust the width of your sidebar
    padding: '20px', // Add some padding to separate content from sidebar
  };

  return (
    <div className='content bg-pink-200'>
      <h1 className='text-center text-fuchsia-800 text-5xl md:italic'>
        Homepage
      </h1>
      
      <p className='text-center md mt-4'> Welcome to Mtest Web application </p>
      <p className='mt-4 p-4'>This web has many features that will allow you to save different types of memes.
        Peruse through our web page to see the many features that are on our application and have a blast.
      </p>
      <p>Please find below our main components</p>
      <ul className='text-right text-lg text-lime-200'>
        <li className='text justify text-lg text-blue-500'>Contacts</li>
        <li className='text justify text-lg text-blue-500'>About us</li>
        <li className='text justify text-lg text-blue-600'>Favourites</li>
      </ul>

      <div className="flex flex-wrap justify-center">
        {memeUrls.map((url, index) => (
          <div key={index} style={cardStyle}>
            <div id="meme-container" style={memeContainerStyle}>
              {url && <img src={url} alt="Random Meme" />}
            </div>
            <button onClick={() => addToFavorites(url)} style={buttonStyle}>
              Add to Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
