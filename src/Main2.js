import React from 'react';
import greekSaladImage from './greek salad.jpg'; 
import restaurantChefBImage from './restaurant chef B.jpg'; // Corrected image filename
import lemonDessertImage from './lemon dessert.jpg';
function Main2() {
  return (
    <main>
      <section>
        <h4>This week's specials!</h4>
      </section>
      {/* Add more content here */}
      <section className="cards-section">
        {/* ... Existing cards ... */}
      </section>
      <section className="additional-cards-section">
        <button className="cards-button">Online Menu</button> {/* Button added here */}
      </section>
      <section className="additional-cards-section">
        <div className="card">
          <div className="card-image">
            <img src={greekSaladImage} alt="Card 1"/>
          </div>
          <div className="card-content">
            <h5>Greek salad   </h5>
            <h6>$12.99 </h6>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
            <h7>Order a deleiery</h7>
            <svg className="moped-svg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path fill="currentColor" d="M19 7c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 10.35V7zM7 17c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1z"/>
      <path fill="currentColor" d="M5 6h5v2H5zm14 7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/>  </svg>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
           <img src={restaurantChefBImage} alt="Restaurant Chef B" />
          </div>
          <div className="card-content">
            <h5>Bruchetta   </h5>
            <h6>$5.99</h6>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
            <h7>Order a deleiery</h7>
            <svg className="moped-svg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path fill="currentColor" d="M19 7c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 10.35V7zM7 17c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1z"/>
      <path fill="currentColor" d="M5 6h5v2H5zm14 7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/>  </svg>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src={lemonDessertImage} alt="Card 3" />
          </div>
          <div className="card-content">
            <h5>Lemon Dessert</h5>
            <h6>$5.00</h6>
            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined..</p>
            <h7>Order a deleiery</h7>
            <svg className="moped-svg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path fill="currentColor" d="M19 7c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 10.35V7zM7 17c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1z"/>
      <path fill="currentColor" d="M5 6h5v2H5zm14 7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"/>  </svg>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main2;
