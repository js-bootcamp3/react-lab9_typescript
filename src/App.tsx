import React from 'react';
import List from './components/List/List';
import { Routes, Route } from "react-router-dom";
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { Login } from './components/Login/Login';

import './App.css';
import { Authenticate } from './components/Authenticate/Authenticate';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route path="/list" element={<Authenticate><List /></Authenticate>} />
        
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
