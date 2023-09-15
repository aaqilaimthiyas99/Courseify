import { HomeSignin } from './components/HomeSignin';
import { Route, Routes } from 'react-router-dom';
import { Main } from './components/Main';
import { HomeCourse } from './components/HomeCourse';
import './App.css';
import { PopularCourses } from './components/PopularCourses';
import { RoadMaps } from './components/RoadMaps';
import { AdminHome } from './Admin/admin_frontend/pages/admin_home'
import { CoursesContextProvider } from './Admin/admin_frontend/context/CourseContext';
// import { SigninPages } from './components/signin_pages';
import { SignUpContainer } from './core/signin_pages';
import { SigninPages } from './components/signin_pages';

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
        <Route
          path="/admin"
          element={
            <CoursesContextProvider>
              <AdminHome />
            </CoursesContextProvider>
          }
        />
        <Route path = "/sign_in" element = {<SigninPages/>}/>
        <Route path="/create_account" element={<SignUpContainer />} />
        </Routes>
    </div>
  );
}

export default App;
