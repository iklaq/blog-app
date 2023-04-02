import { Link } from "react-router-dom";
import { useContext, useEffect, useState} from "react";
import { UserContext } from "../UserContext";

const Header = () => {

  const {setUserInfo, userInfo} = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: 'include',
    }).then(response => {
        response.json().then(userInfo => {
           setUserInfo(userInfo);
        })
    })

  }, []);

  const logout = ()=>{
    
    fetch("http://localhost:4000/logout", {
      credentials: 'include',
      method: 'POST',
    })
    setUserInfo(null);

  }

  const userName = userInfo?.userName;

  return (
    <header>
      <Link to="/" className="logo">
        MyBlog
      </Link>
      <nav>
        {userName && (
          <>
          <Link to='/create'>Create new post</Link>
           <a className="logout-btn" onClick={logout}>Logout</a>
          </>
        )}
        {!userName && ( 
          <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          </>
        )}
        
      </nav>
    </header>
  );
};

export default Header;
