import React from 'react';

import './App.css';
import Navbar from './components/navbar/navbar';
import Navbarfirst from './components/navbar/navbar-first';
import NavbarNote from './components/navbar/navbar_note';
import Intro from './components/body/intro';
import Footer from './components/footer/footer';
import Firstyear from './components/firstyear/firstyear';
import FirstyearLab from './components/firstyearlab/firstyearlab';
import Notes from './components/Notesapp/notes';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
function App() {
  return (

    <BrowserRouter>
      <Routes>
          <Route index element={[(<Navbar />),(<Intro/>),(<Footer/>)]} />
          <Route path="/firstyear" element={[(<Navbarfirst/>),(<Firstyear />)]} />
          <Route path="/firstyear/lab" element={[(<Navbarfirst/>),(<FirstyearLab />)]} />
          <Route path="*" element={[(<Navbar />),(<Intro/>),(<Footer/>)]} />
          
          <Route path="/note" element={[(<NavbarNote/>),(<Notes />)]} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
