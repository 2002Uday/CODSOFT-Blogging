import React, { useContext, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";

const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  const username = userInfo?.username;

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  return (
    <nav className="Header">
      <a className="logo" href="/">
        MyBlogging
      </a>
      {username ? (
        <div className="log">
          <a>Welcome, <span>{username}</span></a>
          <Link to="/create">Create Blog</Link>
          <a href="/" onClick={logout}>
            Logout
          </a>
        </div>
      ) : (
        <div className="log">
          <button className="head-btn">
            <Link to="/login">Login</Link>
          </button>
          <button className="head-btn">
            <Link to="/register">Register</Link>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
