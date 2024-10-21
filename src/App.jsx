// import { useState } from 'react';

import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Components/Pages/Main.jsx';
import Footer from './Components/Pages/Footer.jsx';
import Header from './Components/Pages/Header.jsx';


function App() {
  return (
    <>
      <Header />
      <Main>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/createNote" element={<CreateNote />}></Route> */}
            {/* <Route path="/edit:id" element={<CreateNote />}></Route>
            <Route path="/" element={<Main/>}></Route> */}
          </Routes>
        </BrowserRouter>
      </Main>
      <Footer />
    </>
  );
}

export default App;
