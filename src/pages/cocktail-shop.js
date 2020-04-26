import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Storefront from "../components/storefront"

import Pizarro from "../images/albertopizarro.jpg"
import CS1 from "../images/cocktailshop1.jpg"
import CS2 from "../images/cocktailshop2.jpg"

const CocktailShop = () => (
  <Layout>
    <SEO title="losTRAGOS + Cocktail Shop" />
    <Storefront video="https://player.vimeo.com/video/227348480" support={Pizarro} extra1={CS1} extra2={CS2}/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CocktailShop
