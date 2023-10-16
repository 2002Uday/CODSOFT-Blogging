import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const iconsize = "1.5rem";
  const [isopen, setisopen] = useState(false);
  const togglemenu = () => setisopen(!isopen);
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
    <>
      <nav className="Header">
      <a className="logo" href="/">
        MyBlogging
      </a>
      {username ? (
        <div className="log">
          <a href={`/profile/${userInfo.id}`}>Welcome, <span>{username}</span></a>
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

    {/* Mobile Header */}

    <nav className="Mobile-Header">
      <a className="logo" href="/">
        MyBlogging
      </a>
      <div>
        {!isopen ? (
          <GiHamburgerMenu
            size={iconsize}
            cursor={"pointer"}
            onClick={togglemenu}
              />
            ) : (
              <>
                <GrClose
                size={iconsize}
                cursor={"pointer"}
                onClick={togglemenu}
                />
                <div className="menu">
                  {username ? (
                    <div className="log">
                      <a href={`/profile/${userInfo.id}`}>Welcome, <span>{username}</span></a>
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
                </div>
              </> 
            )}
      </div>
    </nav>


    </>
    
  );
};

export default Header;
