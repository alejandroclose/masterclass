import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pagetitle"
import CourseList from "../components/courselist"
import CourseCard from "../components/coursecard"

import Wrigley from "../images/gavinwrigley3.jpg"
import Pizarro from "../images/albertopizarro3.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Master class de coctelería #EnCasa | losTRAGOS + Cocktail Shop" />
    <PageTitle title="CURSOS" />
    <CourseList>
      <CourseCard
        img={Wrigley}
        event="ONLINE"
        title="Esenciales del Bartending Online"
        author="por Gavin Wrigley"
        desc="Curso de coctelería que te permitirá 
        dominar las técnicas esenciales del bartending, aprendiendo los trucos y las recetas más buscadas, desde casa y a tu ritmo."
        price="34€"
        cta="Ver más..."
        link="https://cursos.lostragos.com/esenciales-bartending-online-gavin-wrigley/"
      />
      <CourseCard 
        img={Pizarro} 
        event="EN VIVO + ONLINE"
        title="Master class de Coctelería #EnCasa"
        author="por Alberto Pizarro"
        desc="Sumérgete en la coctelería de la mano del reconocido bartender 
        Alberto Pizarro en su Master Class online desde Barcelona, España."
        price="25€"
        cta="Ver más..."
        link="https://cursos.lostragos.com/cocktail-shop/" />
    </CourseList>
  </Layout>
)

export default IndexPage
