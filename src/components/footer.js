import React, { useState } from "react"
import {Link} from "gatsby"

import "./footer.css"

const Footer = props => {
  // const [, ] = useState();

  return (
    <>
    <div className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          losTRAGOS.com
        </div>
        <hr/>
        <div className="footer-links">
          <a href="http://lostragos.com/contacto">CONTACTO</a>
          <a href="http://lostragos.com/categorias">RECETAS</a>
          <Link to="/">CURSOS</Link>
        </div>
        <div className="sub-footer">
          <div className="footer-copyright">
        © {new Date().getFullYear()} losTRAGOS.com
          </div>
          <div className="footer-inspiration">Inspirada en Barcelona</div>
        </div>
      </div>

    </div>
    </>
  )
}

export default Footer