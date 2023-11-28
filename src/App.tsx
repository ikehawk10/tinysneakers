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
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
