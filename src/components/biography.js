import React, { useState } from "react"

import "./biography.css"

const Biography = props => {
  // const [, ] = useState();

  return (
    <>
    <div className="biography">
      <img src={props.img} className="biography-img" />
      <div className="biography-text">
        {props.children}
      </div>
    </div>
    </>
  )
}

export default Biography
