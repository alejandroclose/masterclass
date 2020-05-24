import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pagetitle"
import CourseList from "../components/courselist"
import CourseCard from "../components/coursecard"



const IndexPage = () => (
  <Layout>
    <SEO title="Master class de coctelería #EnCasa | losTRAGOS + Cocktail Shop" />
    <PageTitle title="CURSOS" />
    <CourseList>
      <CourseCard />
    </CourseList>
  </Layout>
)

export default IndexPage
