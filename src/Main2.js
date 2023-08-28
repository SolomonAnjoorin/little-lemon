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
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main2;
