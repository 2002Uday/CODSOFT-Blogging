import './App.css';
import {BrowserRouter as Router, Route , Routes } from "react-router-dom"
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Authentication/Login"
import Register from "./components/Authentication/Register"
import CreatePost from "./components/Home/CreatePost.js"
import {UserContextProvider} from "./UserContext";

function App() {
  return (
    <Router> 
      <UserContextProvider>
      <Header/>
      <Routes>
        <Route extact path="/" Component={Home}/>
        <Route extact path="/login" Component={Login}/>
        <Route extact path="/register" Component={Register}/>
        <Route extact path="/create" Component={CreatePost}/>

      </Routes>
      </UserContextProvider>
    </Router>
  );
}

export default App;
