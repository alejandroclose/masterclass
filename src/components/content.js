import React, { useState } from "react"
import {Link} from "gatsby"

import "./content.css"

const Contentbox = props => {
  // const [, ] = useState();

  return (
    <>
    <div className="content">
      <div className={ props.order ? "content-box last-content" : "content-box"}>
        <h2 className="content-title">
          {props.title}
        </h2>
        <div className="content-text">
          {props.children}
        </div>
      </div>
    </div>
    </>
  )
}

export default Contentbox