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
import Pizarro2 from "../images/albertopizarro2.jpg"
import CS1 from "../images/cocktailshop1.jpg"
import CS2 from "../images/cocktailshop2.jpg"

const CocktailShop = () => (
  <Layout>
    <SEO title="Master class de coctelería #EnCasa | losTRAGOS + Cocktail Shop" />
    <ClassBar
      title="MASTER CLASS DE COCTELERIA #ENCASA"
      author="por Alberto Pizarro"
      score="4.8"
      ratings="5"
      type="EN VIVO + ONLINE"
      price="14,99€"
      cta="Inscribirme"
      link="https://zoom.us/webinar/register/WN_krP6PDGARWSQ0UQKuI12NA"
    />
    <Storefront
      featured="https://player.vimeo.com/video/414744180"
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
      date="Sáb. 30 de mayo 22h-23h"
      idlink="/cocktail-shop/#horarios"
    />
    <Content title="SOBRE EL CURSO">
      <p>
        Sumérgete en la coctelería de la mano del reconocido bartender 
        Alberto Pizarro en su Master Class online desde Barcelona, España.
      </p>
      <p>
      Aprenderás a preparar tres recetas de autor ideadas especialmente para esta Master Class. Y todo con
      ingredientes que podrás encontrar en cualquier supermercado, sin técnicas complicadas ni
      utensilios especializados.
      </p>
      
      <p>
        Descubre de una manera divertida y desde tu casa tips únicos y la mejor forma de preparar deliciosos tragos para compartir 
        con familia y amigos.
      </p>
    </Content>
    <Content title="COCKTAIL SHOP Y ALBERTO PIZARRO">
      <Biography img={Pizarro2}>
        <p>
          <a href="http://www.cocktailshop.es">Cocktail Shop</a>, la tienda de material especializado para coctelería en Barcelona,
          presenta a Alberto Pizarro y su Master Class de coctelería #EnCasa.
        </p>
        <p>
        Alberto es considerado uno de los bartenders mas influyentes de España. Ha sido nombrado en 2011, 2014 y 2016 como mejor Barman del Año.
        </p>
        <p>Además, es copropietario del bar Bobby Gin en Barcelona, considerado el templo del Gin&Tonic en España y valorado 
        a nivel internacional como uno de los bares más influyentes en su género.   </p>
      </Biography>
    </Content>
    <Content title="QUÉ NECESITAS">
      <ul>
        <li>Ordenador, teléfono móvil o tablet</li>
        <li>Conexión estable a internet</li>
        <li>Navegador Chrome o Firefox reciente</li>
        <li>Ingredientes para preparar los cocteles (opcional)
        <div>Ginebra (Gin), ron, limones, azúcar, mermelada de naranja, miel, agua con gas,
        zumo de piña (jugo de piña), zumo de naranja (jugo de naranja), fresas, menta fresca, albahaca fresca, hielo.
        </div>
        </li>
        <li>Material
        <div>Vasos altos, 1 mezclador(Opcional).</div>
        </li>
        
      </ul>
    </Content>
    <Content title="CÓMO PARTICIPAR">
      <p>El curso es online y en vivo a través de la aplicación <a href="http://zoom.us">Zoom</a>. 
      Para poder participar, podrás acceder desde el navegador o descargarla en tu ordenador, teléfono móvil o tablet.</p>
      <p>Una vez inscrito, te enviaremos un enlace a tu mail para participar. Cualquier duda puedes escribirnos a info@lostragos.com</p>
      <p>No se admiten cancelaciones.</p>
    </Content>
    <Content id="horarios" title="HORARIOS DISPONIBLES" order="last-content">
      <Date date="Sáb 30 de mayo 2020." time="22:00h-23:00h (CEST)" price="14,99€" cta="Inscribirme" link="https://zoom.us/webinar/register/WN_krP6PDGARWSQ0UQKuI12NA"/>
    </Content>
  </Layout>
)

export default CocktailShop
