// import { useState } from 'react';

import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Components/Pages/Main.jsx';
import Footer from './Components/Pages/Footer.jsx';
import Header from './Components/Pages/Header.jsx';
// import EditNote from './features/EditNote.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/edit/:id" element={<EditNote />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
