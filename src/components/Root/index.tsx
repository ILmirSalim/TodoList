import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import './style.css'

export const Root = () => {

  return (<div className="container">
    <div className="main">
      <NavLink className="linkMain" to="/">Main page</NavLink>
      <NavLink className="linkMain" to="/my-groups">My groups</NavLink>
    </div>
    <div className="outlet">
      <Outlet />
    </div>
  </div>)
}