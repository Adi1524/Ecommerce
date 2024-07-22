import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerRouters from './customer/Routers/CustomerRouters';
import './App.css';

function App() {
  return (

      <Routes>
        <Route path="/*" element={<CustomerRouters />} />
      </Routes>
   
  );
}

export default App;