import React, { useState } from "react"
import { Link } from "gatsby"

import "./storefront.css"

const Storefront = props => {
  // const [, ] = useState();

  return (
    <>
      <div className="storefront">
        <iframe className="featured" src={props.video} frameborder="0"></iframe>
        <img className="secondary" src={props.support} />
        <div className="gallery">
          <img className="gallery-one" src={props.extra1} />
          <img className="gallery-two" src={props.extra2} />
        </div>
      </div>
    </>
  )
}

export default Storefront
