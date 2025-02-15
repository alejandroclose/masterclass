import React, { useState } from "react"

import "./classbar.css"

import BocadilloTop from "../images/bocadillo-top.png"
import Star from "./assets/star.svg"

const Classbar = props => {
  // const [, ] = useState();

  return (
    <>
      <div className="classbar">
        <div className="classbar-content">
          <div className="classbar-class">
            <h1 className="classbar-title">{props.title}</h1>
            <div className="classbar-details">
              <div className="classbar-author">{props.author}</div>
              <div className="classbar-rating">
                <Star className="classbar-rating-icon" />
                <div className="classbar-rating-text">
                  <div className="classbar-rating-score">{props.score}</div>
                  <div className="classbar-rating-qty">
                    {" "}
                    /5 ( {props.ratings} opiniones )
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="classbar-type">
            <div className="classbar-event">{props.type}</div>
          </div>
          {/* <img className="bocadillo-top" src={BocadilloTop}/> */}
          <div className="classbar-pricing">
            <div className="classbar-price">
              <div className="classbar-price-sale">
                <div className="classbar-price-discount">{props.discount}</div>
                <div className="classbar-price-original">
                  {props.originalprice}
                </div>
              </div>
              <div>{props.price}</div>
            </div>
          </div>
          <a target="_blank" className="classbar-cta" href={props.link}>
            <button>{props.cta}</button>
          </a>
        </div>
        <div className="classbar-bottom">
          <div className="classbar-bottom-pricing">
            <div className="classbar-bottom-price">
              <div className="classbar-price-sale">
                <div className="classbar-price-discount">{props.discount}</div>
                <div className="classbar-price-original">{props.originalvalue}</div>
              </div>
              <div>{props.price}</div>
            </div>
          </div>
          <a target="_blank" className="classbar-bottom-cta" href={props.link}>
            <button>{props.cta}</button>
          </a>
        </div>
      </div>
    </>
  )
}

export default Classbar
