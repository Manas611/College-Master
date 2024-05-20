import React,{useEffect,createContext,useReducer,useContext} from 'react';

import Landing from "./Attendance/screens/Landing"
import NavBar from './Attendance/Navbar'
import "./App.css"
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import Signin from "./Attendance/screens/Signin"
import Profile from "./Attendance/screens/Profile"
import SignUp from "./Attendance/screens/Auth/Signup"
import TeacherSignUp from "./Attendance/screens/Auth/Tecah_regis"
import AttenHome from "./Attendance/Home"
import AdminDashboard from "./Attendance/screens/Admin_dash"




const Routing = ()=>{
  const history = useHistory()

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("currentUser"))
    console.log("user",user)
   
  },[])
  return(
    <Switch>
      <Route exact path="/" >
      <Landing />
      </Route>
      <Route exact path="/landing" >
      <Landing />
      </Route>
      <Route path="/adminlogin">
        <Signin />
      </Route>
      <Route path="/stulogin">
        <Signin />
      </Route>
      <Route path="/teclogin">
        <Signin />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/Tsignup">
        <TeacherSignUp />
      </Route>
      <Route path="/student/dashboard">
        <Profile />
      </Route>
      <Route path="/teacher/dashboard">
        <AttenHome />
      </Route>
      <Route path="/admin/dashboard">
        <AdminDashboard />
      </Route>
      {/* <Route path="/result">
        <CreatePost/>
      </Route> */}
    </Switch>
  )
}

function App() {

  return (
  
    <BrowserRouter>
      <NavBar />
      <Routing />
      
    </BrowserRouter>
   
  );
}

export default App;