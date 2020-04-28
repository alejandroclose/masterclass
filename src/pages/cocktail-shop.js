import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Storefront from "../components/storefront"
import ClassBar from "../components/classbar"

import Pizarro from "../images/albertopizarro.jpg"
import CS1 from "../images/cocktailshop1.jpg"
import CS2 from "../images/cocktailshop2.jpg"

const CocktailShop = () => (
  <Layout>
    <SEO title="losTRAGOS + Cocktail Shop" />
    <ClassBar title="MASTER CLASS DE CÓCTELES DEL MUNDO #ENCASA" author="por Cocktail Shop" type="EN VIVO + ONLINE" price="13 €" cta="Inscribirme"/>
    <Storefront featured="https://player.vimeo.com/video/227348480" secondary={Pizarro} galleryone={CS1} gallerytwo={CS2}/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CocktailShop
