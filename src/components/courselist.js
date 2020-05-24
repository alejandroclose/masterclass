import React from "react"
import { Link } from "gatsby"

import "./courselist.css"

const CourseList = (props) => (
  <div className="course-list">
    {props.children}
  </div>
  
)

export default CourseList