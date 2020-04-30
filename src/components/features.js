import React, { useState } from "react"
import {Link} from "gatsby"

import "./features.css"

import Time from "./assets/time.svg"
import Lang from "./assets/lang.svg"
import Level from "./assets/level.svg"
import Format from "./assets/format.svg"
import Age from "./assets/age.svg"
import Date from "./assets/date.svg"
import Glass from "./assets/glass.svg"

const Features = props => {
  // const [, ] = useState();

  return (
    <div className="section">
    <div className="features">
      <div className="feature-box">
        <div className="feature-icon"><Time /></div>
        <div className="feature-content">
          <div className="feature-title">Duración</div>
  <div className="feature-text">{props.time}</div>
        </div>
      </div>
      <div className="feature-box">
        <div className="feature-icon"><Lang /></div>
        <div className="feature-content">
          <div className="feature-title">Idioma</div>
          <div className="feature-text">{props.lang}</div>
        </div>
      </div>
      <div className="feature-box">
        <div className="feature-icon"><Level /></div>
        <div className="feature-content">
          <div className="feature-title">Nivel</div>
          <div className="feature-text">{props.level}</div>
        </div>
      </div>
      <div className="feature-box">
        <div className="feature-icon"><Format /></div>
        <div className="feature-content">
          <div className="feature-title">Formato</div>
          <div className="feature-text">{props.format}</div>
        </div>
      </div>
      <div className="feature-box">
        <div className="feature-icon"><Age /></div>
        <div className="feature-content">
          <div className="feature-title">Edad mínima</div>
          <div className="feature-text">{props.age}</div>
        </div>
      </div>
      <div className="feature-box">
        <div className="feature-icon"><Date /></div>
        <div className="feature-content">
          <div className="feature-title">Próxima fecha</div>
          <div className="feature-text">{props.date}</div>
        </div>
      </div>
      <button className="feature-btn"><Glass className="feature-btn-icon"/><div className="feature-btn-text">Ver más fechas</div></button>
    </div>
    </div>
  )
}

export default Features