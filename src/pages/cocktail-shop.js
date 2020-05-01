import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ClassBar from "../components/classbar"
import Storefront from "../components/storefront"
import Features from "../components/features"
import Content from "../components/content"
import Biography from "../components/biography"

import Pizarro from "../images/albertopizarro.jpg"
import CS1 from "../images/cocktailshop1.jpg"
import CS2 from "../images/cocktailshop2.jpg"

const CocktailShop = () => (
  <Layout>
    <SEO title="losTRAGOS + Cocktail Shop" />
    <ClassBar
      title="MASTER CLASS DE CÓCTELES DEL MUNDO #ENCASA"
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
    <Content title="QUÉ NECESITAS"></Content>
    <Content title="CÓMO PARTICIPAR"></Content>
    <Content title="HORARIOS DISPONIBLES"></Content>
  </Layout>
)

export default CocktailShop
