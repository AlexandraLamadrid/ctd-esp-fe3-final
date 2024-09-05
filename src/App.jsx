//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import DentistDetail from './Pages/DentistDetail';
import { GlobalProvider } from './Context/GlobalContext';

function App() {
  console.log('App rendered');
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dentist/:id" element={<DentistDetail />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
