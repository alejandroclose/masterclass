import React, { useState } from "react"
import { Link } from "gatsby"

import "./storefront.css"

const Storefront = props => {
  // const [, ] = useState();

  return (
    <>
      <div className="storefront">
        <iframe className="featured" src={props.featured} frameborder="0"></iframe>
        <img className="secondary" src={props.secondary} />
        <div className="gallery">
          <img className="gallery-one" src={props.galleryone} />
          <img className="gallery-two" src={props.gallerytwo} />
        </div>
      </div>
    </>
  )
}

export default Storefront
