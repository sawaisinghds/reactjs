import React from 'react';
import {
    Link,
    NavLink
  } from "react-router-dom";

class Header extends React.Component {
    state = {  }
    render() { 
        return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
 
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
              <Link className="nav-link" to="/" >Home</Link>
       
              </li>
              <li className="nav-item">
                  
              <NavLink className="nav-link" to="/about" >About</NavLink>
              
              </li>
              <li className="nav-item">
            
                <Link className="nav-link" to="/users" >users</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      </>
      );
    }
}
 
export default Header;