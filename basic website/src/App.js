import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './main/Home'
import About from './main/About'
import Services from './main/Services'
import Contact from './main/Contact'
import Navbar from './main/Navbar'
import Footer from './main/Footer'
function App() {
  return (
      <Router>
          <Navbar />
          <div>
          <Routes>
              <Route path={"/"} element={<Home />} />
          </Routes>
          <Routes>
              <Route path={"/About"} element={<About />} />
          </Routes>
          <Routes>
              <Route path={"/Services"} element={<Services/>} />
          </Routes>
          <Routes>
              <Route path={"/Contact"} element={<Contact/>} />
              </Routes>
          </div>
          <Footer/>
      </Router>
  );
}

export default App;
