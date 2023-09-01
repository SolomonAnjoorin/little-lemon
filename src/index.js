import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Menu from './pages/Menu';
import About from './pages/About';
import Login from './pages/Login';
import Orderonline from './pages/OrderOnline';
import Reservations from './pages/Reservations';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "Menu",
    element: <Menu />
  },

  {
    path: "About",
    element: <About />
  },
  

  {
    path: "Login",
    element: <Login />
  },

  {
    path: "OrderOnline",
    element: <Orderonline />
  },

  {
    path: "Reservations",
    element: <Reservations />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
