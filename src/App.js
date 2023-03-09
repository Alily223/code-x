import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./Styles/main.scss";

import Home from "./Components/Pages/Home.jsx";
import Navigation from "./Components/Naviagtion/Navigation.jsx";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;