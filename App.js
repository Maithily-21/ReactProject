// App.js
import React, { useState } from 'react';
import LoginPage from './LoginPage';
import AccountOpeningPage from './AccountOpeningPage';
import CustomerDetailsPage from './CustomerDetailsPage';
import './App.css';
import BankLogo from './BankLogo';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [customerData, setCustomerData] = useState(null);
  
  const handleLogin = (data) => {
    setLoggedIn(true);
    setUserData(data);
  };

  
  const handleAccountOpen = (data) => {
    setCustomerData(data);
  };
  const handleSignOut = () => {
    // Implement sign-out logic here
    console.log("Signing out...");
  };

  
  return (
    <div className="App">
      {!loggedIn && <BankLogo />}
      {!loggedIn && <LoginPage onLogin={handleLogin} />}
     
      {loggedIn && !customerData && <AccountOpeningPage userData={userData} onAccountOpen={handleAccountOpen} />}
      {loggedIn && customerData && <CustomerDetailsPage customerDetails={customerData} onSignOut={handleSignOut}  />}
      
    </div>
  );
}

export default App;
// App.js
/*import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import './App.css';
function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const handleShowSignUp = () => {
    setCurrentPage('signup');
  };

  const handleForgotPassword = () => {
    setCurrentPage('forgotPassword');
  };

  const handleLogin = () => {
    // Your login logic here
    // For demonstration purposes, we'll just console.log the login action
    console.log('Logged in successfully');
  };

  const handleSignUp = () => {
    // Your sign up logic here
    // For demonstration purposes, we'll just console.log the sign up action
    console.log('Signed up successfully');
  };

  const handleForgotPasswordSubmit = () => {
    // Your forgot password submission logic here
    // For demonstration purposes, we'll just console.log the submission action
    console.log('Forgot password submitted');
  };

  return (
    <div className="App">
      {currentPage === 'login' && <LoginPage onLogin={handleLogin} onShowSignUp={handleShowSignUp} onForgotPassword={handleForgotPassword} />}
      {currentPage === 'signup' && <SignUpPage onSignUp={handleSignUp} />}
      {currentPage === 'forgotPassword' && <ForgotPasswordPage onSubmit={handleForgotPasswordSubmit} />}
    </div>
  );
}

export default App;*/
