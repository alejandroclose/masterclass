import React, { useState } from "react"

import "./footer.css"

const Footer = props => {
  // const [, ] = useState();

  return (
    <>
    <div className="footer">
      <div className="footer-content">
        <div>
          losTRAGOS.com
        </div>
        <div>
          <div>CONTACTO</div>
          <div>RECETAS</div>
          <div>CURSOS</div>
        </div>
        <div>
          <div>
        © {new Date().getFullYear()} losTRAGOS.com
          </div>
          <div>Inspirada en Barcelona</div>
        </div>
      </div>

    </div>
    </>
  )
}

export default Footer