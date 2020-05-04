import React, { useState } from "react"

import "./classbar.css"

const Classbar = props => {
  // const [, ] = useState();

  return (
    <>
      <div className="classbar">
        <div className="classbar-content">
          <div className="classbar-class">
            <h1 className="classbar-title">
              {props.title}
            </h1>
            <div className="classbar-author">{props.author}</div>
          </div>
          <div className="classbar-type">
            <div className="classbar-event">{props.type}</div>
          </div>
          <div className="classbar-pricing">
            <div className="classbar-price">
              {props.price}
            </div></div>
          <a target="_blank" className="classbar-cta" href={props.link}><button>{props.cta}</button></a>
        </div>
      </div>
    </>
  )
}

export default Classbar
