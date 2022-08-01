import React from 'react'
import Home from './pages/Home';
import History from './pages/History';
import Navbar from './Components/Navbar'
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import {useSelector } from 'react-redux/es/hooks/useSelector';
import './Style.css'
function App() {
  const  formdata =  useSelector((state) => state)
  console.log(formdata);
  return (
   <>
  
    <Router>
         <Navbar/>
  <Routes>
    <Route path='/' element = {<Home/>} />
    <Route path='/history' element = {<History/>} />
  </Routes>


  </Router>

   </>
  )
}

export default App