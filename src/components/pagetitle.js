import React from "react"
import { Link } from "gatsby"

import "./pagetitle.css"

const PageTitle = (props) => (
  <div className="page-title">
    <h1 className="title-text">{props.title}</h1>
  </div>
  
)

export default PageTitle