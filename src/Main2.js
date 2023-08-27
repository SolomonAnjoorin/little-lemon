import React from 'react';

function Main2() {
  return (
    <main>
      <section>
        <h4>This weeks specials!</h4>
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
            <img src="card1.jpg" alt="Card 1" />
          </div>
          <div className="card-content">
            <h5>Card 1</h5>
            <p>This is the content of Card 1.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src="card5.jpg" alt="Card 2" />
          </div>
          <div className="card-content">
            <h5>Card 2</h5>
            <p>This is the content of Card 2.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src="card6.jpg" alt="Card 3" />
          </div>
          <div className="card-content">
            <h5>Card 3</h5>
            <p>This is the content of Card 3.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main2;
