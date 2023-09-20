import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import LoginForm from './LoginForm'; // Import the LoginForm component


function Login() {
  return (
    <div>
      <Nav />
      <h1>Login Page</h1>
      <p>Login here</p>

      {/* Include the LoginForm component here */}
      <LoginForm />

      <Footer />
    </div>
  );
}

export default Login;
