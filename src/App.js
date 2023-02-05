import React from "react";
import {Routes,Route} from 'react-router-dom'
import Nav from "./nav";
import Homepage from "./homepage/Homepage";
import Sidebar from "./sidebar/Sidebar";
import About from "./about/About";
import Project from './project/Project'
import Contact from './contact/Contact'

function App() {
  return (
    <>
    <Nav/>
    <Sidebar/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
