import React from 'react';
import restauranfood from './restauranfood.jpg'; 

function Main() {
  return (
    <main>
      <section>
        <h4>Main Section</h4>
        <p>This is the main content of the website.</p>
      </section>
      <div className="image-container">
        <img src={restauranfood} alt="Restaurant Food" />
        <div className="image-caption">Hover to Zoom</div>
      </div>
    </main>
  );
}

export default Main;
