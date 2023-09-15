import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';

function Menu() {
  return (
    <div className="menu-container">
      <Nav />
      <h1>Menu</h1>

      <h2 color='black'>Appetizers</h2>
      <p>
        <strong>Bruschetta</strong><br />
        Enjoy the classic Italian flavors of toasted baguette slices topped with diced tomatoes, garlic, basil, and a drizzle of balsamic glaze. It's the perfect appetizer to awaken your palate.
      </p>
      <p>
        <strong>Spinach and Artichoke Dip</strong><br />
        Dive into creamy bliss with our spinach and artichoke dip served with tortilla chips. It's a delightful start to your dining adventure.
      </p>

      <h2>Salads</h2>
      <p>
        <strong>Greek Salad</strong><br />
        Indulge in a medley of freshness with our Greek salad. Crisp vegetables, creamy feta cheese, Kalamata olives, and our house-made Greek dressing create a burst of Mediterranean flavors.
      </p>
      <p>
        <strong>Caesar Salad</strong><br />
        Experience the classic Caesar salad, featuring crisp romaine lettuce, croutons, parmesan cheese, and our signature Caesar dressing. It's a timeless favorite.
      </p>

      <h2>Main Courses</h2>
      <p>
        <strong>Chicken Alfredo</strong><br />
        Savor grilled chicken breast served with creamy Alfredo sauce and perfectly cooked pasta. It's comfort food at its finest.
      </p>
      <p>
        <strong>Salmon with Lemon Butter</strong><br />
        Delight in a grilled salmon fillet, elevated by a luscious lemon butter sauce. This dish is a seafood lover's dream.
      </p>

      <h2>Desserts</h2>
      <p>
        <strong>Lemon Tart</strong><br />
        End your meal on a sweet note with our exquisite lemon tart. It's a harmonious blend of zesty lemony goodness and elegant sweetness.
      </p>
      <p>
        <strong>Chocolate Fondue</strong><br />
        Indulge in a chocolate lover's paradise with our chocolate fondue. Dip fresh fruits and treats into velvety melted chocolate for a decadent experience.
      </p>

      <h2>Beverages</h2>
      <p>
        <strong>Signature Cocktails</strong><br />
        Explore our expertly crafted cocktails, from classics to our own unique creations. Each sip is a journey of flavors.
      </p>
      <p>
        <strong>Wine Selection</strong><br />
        Enhance your dining experience with our carefully selected wines, thoughtfully paired with our menu offerings.
      </p>

      <h2>Join Us at Littel Lemon</h2>
      <p>
        We invite you to embark on a culinary adventure at Littel Lemon. Our chefs are dedicated to creating dishes that excite and inspire, and our team is committed to providing you with exceptional service.
      </p>
      <p>
        Whether it's a romantic dinner, a gathering with friends, or a special celebration, Littel Lemon is the place where memories are made. Come for the food, stay for the ambiance, and leave with unforgettable moments.
      </p>

      <h2>Contact Information</h2>
      <ul>
        <li>
          <strong>Address:</strong> [Insert Address Here]
        </li>
        <li>
          <strong>Phone:</strong> [Insert Phone Number Here]
        </li>
        <li>
          <strong>Email:</strong> [Insert Email Address Here]
        </li>
        <li>
          <strong>Online Booking:</strong> [Insert Website Link for Online Booking]
        </li>
      </ul>

      <p>
        Thank you for choosing Littel Lemon, where culinary excellence meets heartfelt hospitality. We look forward to serving you soon.
      </p>

      <Footer />
    </div>
  );
}

export default Menu;
