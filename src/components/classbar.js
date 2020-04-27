import React, { useState } from "react"

import "./classbar.css"

const Classbar = props => {
  // const [, ] = useState();

  return (
    <>
      <div className="classbar">
        <div className="classbar-content">
          <div className="classbar-class">
            <div className="classbar-title">
              MASTER CLASS DE CÓCTELES DEL MUNDO #ENCASA
            </div>
            <div className="classbar-author">por Cocktail Shop</div>
          </div>
          <div className="classbar-type">
            <div className="classbar-event">EN VIVO + ONLINE</div>
          </div>
          <div className="classbar-pricing">
            <div className="classbar-price">
              13 €
            </div></div>
          <a className="classbar-cta" href="/#inscripción"><button>Inscribirme</button></a>
        </div>
      </div>
    </>
  )
}

export default Classbar
