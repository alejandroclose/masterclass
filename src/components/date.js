import React, { useState } from "react"

import "./date.css"

import BocadilloRight from "../images/bocadillo-right.png"

const Date = props => {
  // const [, ] = useState();

  return (
    <>
      <div className="date">
        <div className="date-text">
          <p>{props.date}</p>
          <p>{props.time}</p>
        </div>
  <div className="date-price">{props.price}</div>
        {/* <img className="bocadillo-right" src={BocadilloRight} /> */}
        <a className="date-link" target="_blank" href={props.link}>
          <button className="date-btn">{props.cta}</button>
        </a>
      </div>
    </>
  )
}

export default Date
