import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./Styles/main.scss";

import Home from "./Components/Pages/Home.jsx";
import Navigation from "./Components/Naviagtion/Navigation.jsx";
import Usersettings from "./Components/UserSpecPages/Usersettings";
import Userprofile from "./Components/UserSpecPages/Userprofile";
import Userstats from "./Components/UserSpecPages/Userstats";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/UserSettings" element={<Usersettings/>}/>
          <Route path="/UserProfile" element={<Userprofile/>}/>
          <Route path="/UserStats" element={<Userstats/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;