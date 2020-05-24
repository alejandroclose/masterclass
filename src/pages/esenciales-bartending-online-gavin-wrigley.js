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

import Wrigley from "../images/gavinwrigley.jpg"
import Wrigley2 from "../images/gavinwrigley2.jpg"
import EBO from "../images/esencialesbartending1.jpg"
import EBO2 from "../images/esencialesbartending2.jpg"

const EsencialesBartending = () => (
  <Layout>
    <SEO title="Esenciales del Bartending Online | European Bartender School + losTRAGOS" />
    <ClassBar
      title="Esenciales del Bartending Online"
      author="por Gavin Wrigley"
      score="5"
      ratings="1"
      type="ONLINE"
      price="34€"
      cta="Inscribirme"
      link=""
    />
    <Storefront
      featured="https://player.vimeo.com/video/421875920"
      secondary={Wrigley2}
      galleryone={EBO}
      gallerytwo={EBO2}
    />
    <Features
      time="3.5 horas"
      lang="VOSE"
      level="Básico"
      format="Online y en vivo"
      age="18 años"
      date="Hoy"
      idlink="/esenciales-bartending-online-gavin-wrigley/#horarios"
    />
    <Content title="SOBRE EL CURSO">
      <p>
      Curso de coctelería que te permitirá dominar las técnicas esenciales del bartending, aprendiendo los trucos y  
      las recetas más buscadas, desde casa y a tu ritmo.
      </p>
      <p>
      Tendrás acceso de por vida ¡por solo 34€! EBS ha diseñado la mejor formación de bartending del mundo, a lo largo 
      de más de 20 años. Para este programa online, hemos concentrado nuestra sólida experiencia en 3 horas y media, poniendo a tu alcance el curso de coctelería online de mayor calidad audiovisual, y más completo del sector.
      </p>
      <p>
      Todo ello de la mano de nuestro Director de Educación, un barman con más de 20 años de experiencia y reconocimiento a nivel mundial.
      </p>
    </Content>
    <Content title="EUROPEAN BARTENDER SCHOOL Y GAVIN WRIGLEY">
      <Biography img={Wrigley}>
        <p>
          <a target="_blank" href="https://www.barschool.net">EBS</a>, es la escuela de bartending más grande del mundo con más de 20 años de experiencia y 28 escuelas en todo el mundo. Sus cursos han transformado a más de 70.000 estudiantes 
          en talentosos barmans. Hemos creado el programa de bartender más avanzado del mundo, orientado a formarte en las competencias y técnicas que te permitirán dominar la barra del bar. 
        </p>
        <p>
        Gavin es Director de Educación en European Bartender School, sus responsabilidades como gerente regional han sido garantizar el cumplimiento entre sus sitios (Nueva York, Londres, Manchester y Dublín) con respecto al programa 
        de estudios, los procedimientos operativos generales, el control de costos y los valores de la compañía.
        </p>
        
      </Biography>
    </Content>
    <Content title="QUÉ NECESITAS">
      <ul>
        <li>Ordenador, teléfono móvil o tablet</li>
        <li>Conexión a internet</li>
        <li>Navegador Chrome o Firefox reciente</li>
        <li>Completar el proceso de reserva del curso en <a href="https://www.barschool.net">este enlace</a></li>
      </ul>
    </Content>
    <Content id="horarios" title="HORARIOS DISPONIBLES" order="last-content">
      <Date date="Empieza hoy mismo, acceso de por vida"  price="34€" cta="Inscribirme" link=""/>
    </Content>
  </Layout>
)

export default EsencialesBartending
