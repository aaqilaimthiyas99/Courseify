import { HomeSignin } from './components/HomeSignin';
import { Route, Routes } from 'react-router-dom';
import { Main } from './components/Main';
import { HomeCourse } from './components/HomeCourse';
import './App.css';
import { PopularCourses } from './components/PopularCourses';
import { RoadMaps } from './components/RoadMaps';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element = {<Main/>}/>
        <Route path = "/home" element = {<HomeSignin/>}/>
        <Route path = "/courses" element = {<PopularCourses/>}/>
        {/* <Route path = "/tutors" element = {<HomeSignin/>}/> */}
        <Route path = "/roadmaps" element = {<RoadMaps/>}/>
        {/* <Route path = "/contact" element = {<Contact/>}/> */}
        <Route path = "/courses_by_category" element = {<HomeCourse/>}/>

      </Routes>
    </div>
  );
}

export default App;
