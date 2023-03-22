import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import SuccessPage from './Components/SuccessPage';


const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path='/success' element={<SuccessPage/>} />
        </Routes>
    </>
  )
}

export default App;