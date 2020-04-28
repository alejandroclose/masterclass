import React, { useState } from "react"
import {Link} from "gatsby"

import "./breadcrumb.css"
import Home from "./assets/home.svg"

const Breadcrumb = props => {
  // const [, ] = useState();

  return (
    <>
      <div className="breadcrumb">
      <a href="http://www.lostragos.com" target="_blank" ><Home className="breadcrumb-home"/></a>/ <Link to="/cursos">Cursos</Link> / Cocktail Shop
      </div>
    </>
  )
}

export default Breadcrumb