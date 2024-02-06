import './App.css';
import React from 'react';
import { Container } from '@mui/material';
import Dashboard from './components/Dashboard';
//import FeaturedTabs from "./components/Featured/FeaturedTabs"

const App = () => {
  return (
    <Container maxWidth = 'false' disableGutters = 'true' sx={{width: '100%', height: '100%'}}>
    <Dashboard/>
</Container>
  );
};

export default App;
