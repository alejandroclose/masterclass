import React, { useState } from "react"
import { Link } from "gatsby"

import "./header.css"

import Logo from "../images/lostragos_logo_horizontal.png"

import Menu from "./assets/menu.svg"
import MenuArrow from "./assets/menu-arrow.svg"
import Home from "./assets/home.svg"

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
      <aside>
        <div className={isOpen ? "menu" : "is-closed"}>
          <ul>
            <li className="menu-item">
              <div className="menu-item-text">ENTRADA</div>
              <Home className="menu-item-icon" />
            </li>
            <li className="menu-item">
              <div className="menu-item-text">RECETAS</div>
              <MenuArrow className="menu-item-icon" />
            </li>
            <li className="menu-item">
              <div className="menu-item-text">OCASIONES</div>
              <MenuArrow className="menu-item-icon" />
            </li>
            <li className="menu-item">
              <div className="menu-item-text">COLECCIONES</div>
              <MenuArrow className="menu-item-icon" />
            </li>
            <li className="menu-item">
              <div className="menu-item-text">MASTER CLASS</div>
              <MenuArrow className="menu-item-icon" />
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Header
