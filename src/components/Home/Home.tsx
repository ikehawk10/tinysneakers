import React, { useState } from 'react';

const Home: React.FC = () => {
  const [apiResponse, setApiResponse] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');


  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputValue }),
    });
    const data = await response.json();
    setApiResponse(data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Calendar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Photos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Add your Home component content here */}
      <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a value"
          />
          <button onClick={fetchData}>Test API Communication</button>
          <p>API Response: {apiResponse}</p>
        </div>
    </div>
  );
};

export default Home;
