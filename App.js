import React from "react";
//import { HomeSignin } from './components/HomeSignin';
//import { Main } from './components/Main';
//import { HomeCourse } from './components/HomeCourse';
import "./App.css";
//import { PopularCourses } from './components/PopularCourses';
import FindTutors from "./components/FindTutors";
import { JoinAsTutor } from "./components/JoinAsTutor";
import { BrowserRouter, Routes,Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FindTutors/>}/>
      <Route path="/joinastutor" element={<JoinAsTutor/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
