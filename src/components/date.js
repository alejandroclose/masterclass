import React, { useState } from "react"

import "./date.css"

const Date = props => {
  // const [, ] = useState();

  return (
    <>
    <div className="date">
      <div className="date-text">
        <p>{props.date}</p>
        <p>{props.time}</p>
      </div>
  <a target="_blank" href={props.link}><button className="date-btn">{props.cta}</button></a>
    </div>
    </>
  )
}

export default Date
