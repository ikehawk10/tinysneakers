// Login.tsx

import React, { SyntheticEvent, useState } from 'react';
import './Login.css'; // Import your app.css file

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = async (event: SyntheticEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Handle successful login, e.g., redirect to another page
        console.log('Login successful');
      } else {
        // Handle failed login
        const errorData = await response.json();
        console.error('Login error:', errorData.message);
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  const showPassword = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const input = document.getElementById('password') as HTMLInputElement;
    if (input.type === 'password') {
      input.type = 'text';
      event.currentTarget.className = 'fas fa-eye';
    } else {
      input.type = 'password';
      event.currentTarget.className = 'fas fa-eye-slash';
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-sm-7 mx-auto">
            <div className="shadow-lg">
              <div className="d-flex align-items-center">
                <div className="d-none d-md-block d-lg-block">
                  <img src="/static_files/images/html/thApp.jpg" className="objectFit" alt="App" />
                </div>
                <div className="p-4" id="formPanel">
                  <div className="text-center mb-5">
                    <h1 className="customHeading h3 text-uppercase">Login</h1>
                  </div>
                  <form onSubmit={submitForm}>
                    <div className="custom-form-group">
                      <label className="text-uppercase" htmlFor="username">
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        className="pb-1"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <span className="pb-1">
                        <i className="fas fa-user"></i>
                      </span>
                    </div>
                    <div className="custom-form-group mt-3">
                      <label className="text-uppercase" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="pb-1"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span className="pb-1">
                        <i id="showCursor" className="fas fa-eye-slash" onClick={showPassword}></i>
                      </span>
                    </div>
                    <div className="mt-5">
                      <button type="submit" className="w-100 p-2 d-block custom-btn">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
