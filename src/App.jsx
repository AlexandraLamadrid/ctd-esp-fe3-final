//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact'; 
import { GlobalProvider } from './Context/GlobalContext';
import DentistDetail from './Pages/DentistDetail';


function App() {
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
