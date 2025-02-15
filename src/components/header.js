import React, { useState } from "react"
import { Link } from "gatsby"

import "./header.css"

import Logo from "../images/lostragos_logo_horizontal.png"

import Menu from "./assets/menu.svg"
import MenuArrow from "./assets/menu-arrow.svg"
import Home from "./assets/home.svg"
import Breadcrumb from "./breadcrumb"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);


  let handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <header className="header">
        <button className="menu-btn" onClick={handleClick}>
          <Menu className="menu-icon" />
        </button>
        <div>
          <img className="logo" src={Logo} />
        </div>
        <button className="search" />
      </header>
      <Breadcrumb />
      <aside>
        <div className={isOpen ? "menu" : "is-closed"}>
          <ul>
            <li className="menu-item">
              <a href="http://lostragos.com" className="menu-item-text">ENTRADA</a>
              <Home className="menu-item-icon" />
            </li>
            <li className="menu-item">
              <a href="http://lostragos.com/categoria/clasicos/" className="menu-item-text">RECETAS</a>
              <MenuArrow className="menu-item-icon" />
            </li>
            <li className="menu-item">
              <a href="http://lostragos.com/categoria/verano/" className="menu-item-text">OCASIONES</a>
              <MenuArrow className="menu-item-icon" />
            </li>
            <li className="menu-item">
              <a href="http://lostragos.com/categoria/iba/" className="menu-item-text">COLECCIONES</a>
              <MenuArrow className="menu-item-icon" />
            </li>
            <li className="menu-item">
              <Link to="/cocktail-shop" className="menu-item-text">MASTER CLASS</Link>
              <MenuArrow className="menu-item-icon" />
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Header
