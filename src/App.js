import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Main2 from './Main2'; // Import the new Main2 component
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Main />
      <Main2 /> {/* Add the new Main2 component */}
      <Footer />
    </>
  );
}

export default App;
