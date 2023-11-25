import React, { SyntheticEvent } from 'react';
import './App.css';


const LoginForm: React.FC = () => {
  const submitForm = (event: SyntheticEvent) => {
    event.preventDefault();
    // Handle form submission logic
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
                      <input type="text" id="username" className="pb-1" />
                      <span className="pb-1">
                        <i className="fas fa-user"></i>
                      </span>
                    </div>
                    <div className="custom-form-group mt-3">
                      <label className="text-uppercase" htmlFor="password">
                        Password
                      </label>
                      <input type="password" id="password" className="pb-1" />
                      <span className="pb-1">
                        <i id="showCursor" className="fas fa-eye-slash" onClick={showPassword}></i>
                      </span>
                    </div>
                    <div className="mt-5">
                      <button className="w-100 p-2 d-block custom-btn">Login</button>
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

export default LoginForm;
