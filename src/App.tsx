// App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';


const App: React.FC = () => {
  return (
    <Home/>
  );
};

export default App;
