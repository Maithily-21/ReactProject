// ForgotPasswordPage.js
import React from 'react';

function ForgotPasswordPage({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your forgot password submission logic here
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password?</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ForgotPasswordPage;
