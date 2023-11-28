import React, { useState, useEffect } from 'react';
import Image from "../Image/Image";
import "./Home.css";

const Home: React.FC = () => {
  const [apiResponse, setApiResponse] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'absolute';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.animationDelay = Math.random() * 3 + 's';
      confettiContainer.appendChild(confetti);
    }

    // Remove confetti after 10 seconds
    setTimeout(() => {
      document.body.removeChild(confettiContainer);
    }, 10000);
  }, []);



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
      <Image source={`${process.env.PUBLIC_URL}/images/river1.JPG`} alt="river1" width={100} height={100} />
      <Image source={`${process.env.PUBLIC_URL}/images/river2.JPG`} alt="river2" width={100} height={100} />
      <Image source={`${process.env.PUBLIC_URL}/images/river3.JPG`} alt="river3" width={100} height={100} />
      <Image source={`${process.env.PUBLIC_URL}/images/river4.JPG`} alt="river4" width={100} height={100} />
      <Image source={`${process.env.PUBLIC_URL}/images/river5.JPG`} alt="river5" width={100} height={100} />
      <Image source={`${process.env.PUBLIC_URL}/images/river6.JPG`} alt="river6" width={100} height={100} />
      <Image source={`${process.env.PUBLIC_URL}/images/river7.JPG`} alt="river7" width={100} height={100} />
      <Image source={`${process.env.PUBLIC_URL}/images/river8.JPG`} alt="river8" width={100} height={100} />
      <Image source={`${process.env.PUBLIC_URL}/images/river9.JPG`} alt="river9" width={100} height={100} />

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
