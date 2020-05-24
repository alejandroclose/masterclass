import React from "react"
import { Link } from "gatsby"

import "./coursecard.css"

import Wrigley from "../images/gavinwrigley3.jpg"

const CourseCard = (props) => (
  <div className="course-card">
    <img src={Wrigley} className="course-card-img"></img>
    <div className="course-card-content"></div>
  </div>
  
)

export default CourseCard