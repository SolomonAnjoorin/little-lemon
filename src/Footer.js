import React from 'react';
import { Link } from 'react-router-dom';
import logo from './footer-logo.png';
import './Footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer>
      <menu className="menu">
        <li className="img-footer">
          <img src={logo} alt="Logo" className="logo" style={{ height: '200px' }} />
        </li>
        <li className="contact">
          <h7 className="footer-header">Navigation</h7>
          {/* Moved the closing </ul> tag here */}
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/orderonline">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </li>

        <li className="contact">
          <h7 className="footer-header">Contact</h7>
          <ul className="footer-links">
            <li>2395 Maldove Way,</li>
            <li>Chicago Illinois</li>
            <br />
            <li>(234) 888 333 222</li>
            <br />
            <a href="mailto:info@littlelemon.com" target="_blank" rel="noreferrer">
              info@littlelemon.com
            </a>
          </ul>
        </li>
        <li className="connect">
          <h7 className="footer-header">Connect</h7>
          <ul className="footer-links">
            <a
              href="https://www.facebook.com/thelittlelemonshop/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/littlelemonmoon/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/watch?v=3Li-FfypZYE"
              target="_blank"
              rel="noreferrer"
            >
              Join us!
            </a>
          </ul>
        </li>
      </menu>
    </footer>
  );
}

export default Footer;


/*<p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>*/
