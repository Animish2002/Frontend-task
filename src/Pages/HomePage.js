import React from 'react';
import background from '../components/assets/paul-earle-wVjd0eWNqI8-unsplash.jpg';

import './homepage.css';

const HomePage = () => {
  return (
    <div className="background" style={{ backgroundImage: `url(${background})` }}>
      <div className="content">
        <header>
          <h1>Welcome to the App</h1>
        </header>
      </div>
    </div>
  );
}

export default HomePage;
