// App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';


const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Common components or layout can be placed here */}
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/registration" element={<Registration/>} />
          {/* Add more routes as needed */}
          {/* A catch-all route for unknown paths */}
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
