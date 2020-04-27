import React, { useState } from "react"

import "./classbar.css"

const Classbar = props => {
  // const [, ] = useState();

  return (
    <>
      <div className="classbar">
        <div className="classbar-content">
        <div>
          <div className="classbar-title">MASTER CLASS DE CÓCTELES DEL MUNDO #ENCASA</div>
          <div>por Cocktail Shop</div>
        </div>
        <div>EN VIVO + ONLINE</div>
        <div>13€</div>
        <a href="/#inscripción">Inscribirme</a>
        </div>
      </div>
    </>
  )
}

export default Classbar