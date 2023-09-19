import React from "react";
import Home from './components/home'
import About from './components/about'
import Profile from './components/profile'
import { Route, Routes } from "react-router-dom";

function App() {
    const [signIn, toggle] = React.useState(true);
     return(
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Profile" element={<Profile/>}/>
        </Routes>

    </div>
     
     )
}

export default App;