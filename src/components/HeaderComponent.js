import React from "react";
import { Link } from "react-router-dom";


function Header(props){

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="/home">
            <img
              src="/assets/images/logo.png"
              alt="Recipes Junction Logo"
            />
            <p>recipes Junction</p>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/home">
                  <i className="fa fa-home fa-lg header-icon"></i>
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#footer">
                  <i className="fa fa-address-card fa-lg header-icon"></i>
                  Contact
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search Recipes" aria-label="Search"
               value={props.searchValue} onChange={props.onChange}/>
              <Link to={`/home/${props.searchedValue?props.searchedValue.id:""}`}>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit" ><i className="fas fa-search"></i></button>
              </Link> 
            </form>
          </div>
        </nav>
      </div>
    );

}


export default Header;