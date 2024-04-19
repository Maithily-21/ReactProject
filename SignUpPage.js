// SignUpPage.js
// SignUpPage.js
import React, { useState } from 'react';

function SignUpPage({ onSignUp }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Here you would perform sign up validation
    if (fullName.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields.');
    } else {
      // For demonstration, just call onSignUp with user data
      onSignUp({ fullName, email });
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleSignUp(); }}>
        <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;
