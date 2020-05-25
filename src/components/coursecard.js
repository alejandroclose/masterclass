import React from "react"
import { Link } from "gatsby"

import "./coursecard.css"

const CourseCard = props => (
  <a href={props.link} className="course-card">
    <div className="coursecard-event">{props.event}</div>
    <img src={props.img} className="coursecard-img"></img>
    <div className="coursecard-content">
      <h3 className="coursecard-title">{props.title}</h3>
      <div className="coursecard-author">{props.author}</div>
      <div className="coursecard-desc">{props.desc}</div>
      <div className="coursecard-pricing">
        <div className="coursecard-price">{props.price}</div>
        <button className="coursecard-cta">
          <a href={props.link}>{props.cta}</a>
        </button>
      </div>
    </div>
  </a>
)

export default CourseCard
