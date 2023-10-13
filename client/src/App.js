import './App.css';
import {BrowserRouter as Router, Route , Routes } from "react-router-dom"
import Header from "./Header/Header";
import Home from "./Home/Home";
import Login from "./Authentication/Login"
import Register from "./Authentication/Register"


function App() {
  return (
    <Router> 
      <Header/>
      <Routes>
        <Route extact path="/" Component={Home}/>
        <Route extact path="/login" Component={Login}/>
        <Route extact path="/register" Component={Register}/>

      </Routes>
    </Router>
  );
}

export default App;
