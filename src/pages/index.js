import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ClassBar from "../components/classbar"
import Storefront from "../components/storefront"
import Features from "../components/features"
import Content from "../components/content"
import Biography from "../components/biography"
import Date from "../components/date"

import Pizarro from "../images/albertopizarro.jpg"
import CS1 from "../images/cocktailshop1.jpg"
import CS2 from "../images/cocktailshop2.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="losTRAGOS + Cocktail Shop" />
    <ClassBar
      title="MASTER CLASS DE COCTELERIA #ENCASA"
      author="por Cocktail Shop"
      type="EN VIVO + ONLINE"
      price="13 €"
      cta="Inscribirme"
    />
    <Storefront
      featured="https://player.vimeo.com/video/227348480"
      secondary={Pizarro}
      galleryone={CS1}
      gallerytwo={CS2}
    />
    <Features
      time="1 hora"
      lang="Español"
      level="Iniciación"
      format="Online y en vivo"
      age="18 años"
      date="sab. 9 mayo 20h (CEST)"
      idlink="/cocktail-shop/#horarios"
    />
    <Content title="SOBRE EL CURSO">
      <p>
        Viaja a Cuba para aprender todos los secretos de un buen MOJITO CLÁSICO,
        como los que bebía Hemingway en La Bodeguita del Medio, y si lo
        prefieres puedes hacerlo con puré de frutas para darte otro sabor.
      </p>
      <p>
        Luego sube a Estados Unidos para saborear un cóctel elegante y sexy como
        el famoso COSMOPOLITAN, inmortalizado por la adorable Carrie Bradshaw de
        la popular serie Sex and the City.
      </p>
      <p>
        Acaba en Australia y descubre el JAPANESE SLIPPER, inventado por un un
        prestigioso chef de Melbourne.
      </p>
    </Content>
    <Content title="COCKTAIL SHOP">
      <Biography img={Pizarro}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
          maximus est. Quisque laoreet pulvinar consectetur. Vestibulum ante
          ipsum primis in fauci- bus orci luctus et ultrices posuere cubilia
          Curae; Cu- rabitur fringilla mollis libero. Vivamus quis lobortis
          diam. Mauris euismod iaculis porta. Duis vitae pellentesque nunc,
          tincidunt vehi-
        </p>
      </Biography>
    </Content>
    <Content title="QUÉ NECESITAS">
      <ul>
        <li>Ordenador, teléfono móvil o tablet</li>
        <li>Conexión estable a internet</li>
        <li>Navegador Chrome o Firefox reciente</li>
        <li>Ingredientes para los cocteles (Opcional)
        <div>1 botella de Ron, limones, agua.</div>
        </li>
        <li>Material (Opcional)
        <div>1 vaso, 1 mezclador.</div>
        </li>
        
      </ul>
    </Content>
    <Content title="CÓMO PARTICIPAR">
      <p>El curso es online y en vivo a través de la aplicación Zoom. Tendrás que des- cargarla en tu ordenador, teléfono móvil o tablet para participar.</p>
      <p>Una vez inscrito, te enviaremos un enlace a tu mail para participar.</p>
      <p>Consulta nuestra política de cancelación.</p>
    </Content>
    <Content id="horarios" title="HORARIOS DISPONIBLES" order="last">
      <Date date="Vie., 15 septiembre 2020" time="20:00h-21:00h (CEST)" cta="Inscribirme"/>
    </Content>
  </Layout>
)

export default IndexPage
