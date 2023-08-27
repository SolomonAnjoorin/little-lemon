import React from 'react';
import restauranfood from './restauranfood.jpg';

function Main() {
  return (
    <main>
    
      <div className="image-container">
        <img src={restauranfood} alt="Restaurant Food" />
        <div className="image-caption">Restaurant Food</div>
      </div>
    </main>
  );
}

export default Main;
