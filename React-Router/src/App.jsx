import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Blue from './components/Blue';
import Red from './components/Red';
import Home from './components/Home';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
      {/* <h1>Hello React Router!</h1> */}
      <div id="navbar">
        <Link to= "/Blue" > Blue </Link>
        <Link to= "/Red" > Red </Link>
        <Link to= "/"> Home </Link>
      </div>
      <div id="main-section">
        <Routes>
        <Route path="/Blue" element={<Blue/>} Route/> 
        <Route path="/Red" element={<Red/>} Route/>
        <Route path="/Home" element={<Home/>} Route/>

        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
