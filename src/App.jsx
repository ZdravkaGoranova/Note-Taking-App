// import { useState } from 'react';

import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Components/Pages/Main.jsx';
import Footer from './Components/Pages/Footer.jsx';
import Header from './Components/Pages/Header.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </BrowserRouter>
   
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
