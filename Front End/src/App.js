import './App.css';
import React from 'react';
import NavBar from './components/Navbar';
import Homepage from './components/pages/Homepage';
import ContactPage from './components/pages/ContactPage';
import Footer from './components/Footer';
import Profile from './components/pages/Profile';
import OurPeoplePage from './components/pages/OurPeoplePage';
import Investments from './components/pages/Investments';
import LogIn from './components/pages/LogIn';

import { BrowserRouter as Router, Routes, Route, useLocation, Outlet} from 'react-router-dom';
import AboutPage from './components/pages/AboutPage';


function App() {
  return (
    <>
    <Router>
      <NavBar />
      <div className='body'>
        <Routes>
          
          <Route path='/' element = {<Homepage/>} />
          <Route path='/about' element = {<AboutPage />} />
          <Route path='/our-people' element = {<OurPeoplePage />} />
          <Route path='/contact-us' element = {<ContactPage/>}/>
          <Route path='/Profile' element = {<Profile/>} />
          <Route path='/investments' element = {<Investments/>} />
          <Route path='/LogIn' element = {<LogIn/>} />

        </Routes>
      </div> 
      <div className='footer'>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App; 
