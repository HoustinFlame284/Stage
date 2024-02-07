import './App.css';
import React from 'react';
import { Container } from '@mui/material';
import Dashboard from './components/DashBoard/Dashboard';
import Orders from './components/Reports/Orders';
import { BrowserRouter as Routes, Route, Router } from "react-router-dom";
import Reports from './components/Reports/Reports';

const App = () => {
  return (
    <Dashboard maxWidth = 'false' disableGutters = 'true' sx={{width: '100%', height: '100%'}}>
      <Router>
        <div>
        <Routes>
          <Route path="reports" element={< Reports/>} />
      </Routes>
      </div>
    </Router>
</Dashboard>
  );
};

export default App;
