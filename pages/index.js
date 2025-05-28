import React, { Fragment, useEffect } from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Work from '../components/work'
import CustomLink from '../components/custom-link'
import Tag from '../components/tag'
import Service from '../components/service'
import Author from '../components/author'
import Client from '../components/client'

const Home = (props) => {
  useEffect(() => import('@lottiefiles/lottie-player'), [])
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Portafolio Samuel</title>
          <meta property="og:title" content="Portafolio Samuel" />
        </Head>
        <header className="home-header10">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <div className="home-branding1">
              <div className="home-lottie1">
                <lottie-player
                  src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/723e1557-f0b1-4214-9000-6f440325a025/efe10fde-977f-4792-8b1d-a4d33c9f0dad"
                  loop
                  speed="1"
                  autoplay="true"
                  background="transparent"
                ></lottie-player>
              </div>
              <a href="#hero" className="home-company1">
                Samuel Aparicio
              </a>
            </div>
            <div className="home-items1">
              <div className="home-links1">
                <a href="#destacados" className="home-link1 nav-link">
                  Trabajos
                </a>
                <a href="#servicios" className="home-link2 nav-link">
                  Servicios
                </a>
                <a href="#experiencia" className="home-link3 nav-link">
                  experiencia
                </a>
                <a href="#contacto" className="home-link4 nav-link">
                  Contacto
                </a>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <button className="home-button1 button">
                <img alt="image" src="/hamburger.svg" className="home-image1" />
                <span className="home-text10">Start a project</span>
              </button>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="home-nav"
              >
                <div className="home-top">
                  <div className="home-branding2">
                    <img alt="image" src="/logo.svg" className="home-logo" />
                    <span className="home-company2">SPYRL</span>
                  </div>
                  <div data-thq="thq-close-menu" className="home-menu-close">
                    <svg viewBox="0 0 1024 1024" className="home-icon1">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <div className="home-items2">
                  <div className="home-links2">
                    <span className="nav-link">Work</span>
                    <span className="nav-link">Services</span>
                    <span className="nav-link">About</span>
                    <span className="nav-link">Contact</span>
                  </div>
                  <button className="start-button button home-button2">
                    <span className="home-text15">Start a project</span>
                  </button>
                </div>
              </div>
            </div>
          </header>
        </header>
        <header className="home-hero">
          <div className="home-header11">
            <div className="home-container2">
              <h1 id="hero" className="home-title1">
                SAMUEL APARICIO
              </h1>
              <img alt="image" src="/yo-800w.jpg" className="home-image2" />
            </div>
            <p className="home-description1">Diseñador multimedia desde 2022</p>
          </div>
        </header>
        <img
          alt="image"
          src="/restaurante%20noche-1500w.jpg"
          className="home-image3"
        />
        <h2 id="sobre mi" className="home-title2 heading">
          sOBRE mÍ
        </h2>
        <div className="home-description2">
          <div className="home-content">
            <div className="home-text16">
              <p className="home-paragraph1">
                Soy un diseñador multimedia con enfoque en creación visual a
                través del modelado 3D, la animación y el diseño gráfico. Me
                encanta explorar y aprender nuevas herramientas para dar vida a
                las ideas que conecten con las personas.
              </p>
              <p className="home-paragraph2">
                Desde 2022 he trabajado en proyectos personales y profesionales
                siempre buscando que cada pieza tenga intención y estilo.
              </p>
            </div>
          </div>
        </div>
        <div className="home-featured">
          <div className="home-header12">
            <h2 id="destacados" className="heading">
              TRABAJOS DESTACADOS
            </h2>
            <div className="home-link5"></div>
          </div>
          <Work
            text={
              <Fragment>
                <span className="home-text17">
                  Miles Morales fan art
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </Fragment>
            }
            image="/spiderman%20-1500w.jpg"
            title="Miles Morales - fan art busto 3d"
            description="Escultura digital de Miles Morales. El busto fue modelado desde cero, texturizado en alta resolución y renderizado con iluminación tipo estudio para resaltar los detalles del rostro y del traje. Este proyecto fue un ejercicio de exploración de materiales y practica de esculturas\xA0"
            rootClassName="workroot-class-name"
          ></Work>
          <div className="home-list">
            <div className="home-work1">
              <img alt="image" src="/pez-1500w.jpg" className="home-image4" />
              <div className="home-details1">
                <div className="home-header13">
                  <div className="home-heading1">
                    <span className="home-text18">Piscina para uno </span>
                    <CustomLink></CustomLink>
                  </div>
                  <span className="home-text19">
                    Proyecto personal de estilo surrealista. Se trata de una
                    pecera circular haciendo alusión a una alberca semi olímpica
                    en la parte de arriba, habitada por un solo pez. Modelado y
                    Renderizado en Blender, la escena juega con las luces y
                    reflejos para dar una sensación de inmersión en la pecera.
                  </span>
                </div>
                <div className="home-tags1">
                  <Tag tag="Arte Surreal\n"></Tag>
                  <Tag tag="Modelado 3D"></Tag>
                  <Tag tag="Blender"></Tag>
                </div>
              </div>
            </div>
            <div className="home-work2">
              <img
                alt="image"
                src="/fantasma-1500w.jpg"
                className="home-image5"
              />
              <div className="home-details2">
                <div className="home-header14">
                  <div className="home-heading2">
                    <span className="home-text20">
                      <span>Presencia y COmfort</span>
                      <br></br>
                    </span>
                    <CustomLink></CustomLink>
                  </div>
                  <span className="home-text23">
                    En este proyecto mezcle lo cotidiano como un sillón con lo
                    sobrenatural e inquietante que puede ser una presencia
                    fantasmal para romper la conformidad y probar un nuevo
                    estilo visual. Modelado y renderizado en Blender con enfoque
                    en iluminación y texturizado
                  </span>
                </div>
                <div className="home-tags2">
                  <Tag tag="Cinemático\n"></Tag>
                  <Tag tag="Modelado 3D"></Tag>
                  <Tag tag="Blender"></Tag>
                </div>
              </div>
            </div>
          </div>
          <div className="home-work3">
            <img alt="image" src="/pulpo-1500w.jpg" className="home-image6" />
            <div className="home-details3">
              <div className="home-header15">
                <div className="home-heading3">
                  <span className="home-text24">Helado Marino</span>
                  <CustomLink></CustomLink>
                </div>
                <span className="home-text25">
                  Ilustración realizada en Adobe Illustrator, el personaje fue
                  creado desde cero con herramientas vectoriales y diseñado para
                  tener una estetica amigable y creativa fusionando los
                  conceptos de un simple helado con una creatura viviente
                </span>
              </div>
              <div className="home-tags3">
                <Tag tag="Ilustración 2D"></Tag>
                <Tag tag="Vectorial"></Tag>
                <Tag tag="Adobe Illustrator"></Tag>
              </div>
            </div>
          </div>
        </div>
        <div className="home-services">
          <div className="home-header16">
            <h2 id="servicios" className="heading">
              Servicios
            </h2>
          </div>
          <div className="home-grid1">
            <Service
              title="Diseño Grafico"
              description1={
                <Fragment>
                  <span className="home-text26">
                    <span>-Logotipos e identidad visual</span>
                    <br></br>
                    <br></br>
                    <span>-Diseño editorial (revistas, flyers, catálogos)</span>
                    <br></br>
                    <br></br>
                    <span>-Contenido para redes sociales</span>
                  </span>
                </Fragment>
              }
              rootClassName="serviceroot-class-name1"
            ></Service>
            <Service
              title="Modelado 3D"
              description1={
                <Fragment>
                  <span className="home-text34">
                    <span>-Modelado de personajes y props</span>
                    <br></br>
                    <br></br>
                    <span>-Esculturas digitales</span>
                    <br></br>
                    <br></br>
                    <span>-Modelos para impresión 3D</span>
                  </span>
                </Fragment>
              }
              rootClassName="serviceroot-class-name"
            ></Service>
            <Service
              title="Render y Visualización"
              description1={
                <Fragment>
                  <span className="home-text42">
                    <span>-Renders de producto</span>
                    <br></br>
                    <br></br>
                    <span>-Escenarios conceptuales</span>
                    <br></br>
                    <br></br>
                    <span>-Ilustraciones 3D</span>
                  </span>
                </Fragment>
              }
              rootClassName="serviceroot-class-name5"
            ></Service>
            <Service
              title=" Motion Graphics"
              description1={
                <Fragment>
                  <span className="home-text50">
                    <span>-Animaciones explicativas</span>
                    <br></br>
                    <br></br>
                    <span>-Intros/outros para contenido digital</span>
                    <br></br>
                    <br></br>
                    <span>-Motion graphics para redes</span>
                  </span>
                </Fragment>
              }
              rootClassName="serviceroot-class-name2"
            ></Service>
            <Service
              title="Diseño Editorial"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
              description1={
                <Fragment>
                  <span className="home-text58">
                    <span>-Maquetación profesional</span>
                    <br></br>
                    <br></br>
                    <span>-Diseño de libros, revistas y documentos</span>
                    <br></br>
                    <br></br>
                    <span>-Exportación lista para imprenta o web</span>
                    <br></br>
                    <br></br>
                  </span>
                </Fragment>
              }
              rootClassName="serviceroot-class-name3"
            ></Service>
            <Service
              title="Branding y Dirección de Arte"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
              description1={
                <Fragment>
                  <span className="home-text68">
                    <span>-Creación de conceptos visuales</span>
                    <br></br>
                    <br></br>
                    <span>-Guías de estilo y manuales de marca</span>
                    <br></br>
                    <br></br>
                    <span>-Aplicaciones visuales coherentes</span>
                  </span>
                </Fragment>
              }
              rootClassName="serviceroot-class-name4"
            ></Service>
          </div>
        </div>
        <div className="home-about">
          <div className="home-header17">
            <h2 id="experiencia" className="home-company3">
              EXPERIENCIA
            </h2>
            <span className="home-description3">
              <span>Diseñador visual y 3D – ETEREO</span>
              <br></br>
              <span>2025 – Actualidad</span>
              <br></br>
              <span>
                Diseño de flyers y visuales animados para fiestas con temática
                rave, reggaetón y house. Responsable de la identidad visual y
                animaciones para pantallas durante los eventos. Uso de Blender,
                Illustrator y After Effects.
              </span>
            </span>
            <span className="home-description4">
              <span>
                {' '}
                Modelador 3D – Lagar Gorras
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>2023 – Actualidad</span>
              <br></br>
              <span>
                Colaboración con marca emergente de streetwear en diseño de
                modelos 3D para gorras. Creación de prototipos en Blender con
                enfoque comercial y estilo urbano.
              </span>
            </span>
            <span className="home-description5">
              <span>
                Creación y venta de producto 3D – Granada Jinx (Fan Art)
              </span>
              <br></br>
              <span>2025</span>
              <br></br>
              <span>
                Diseño, modelado, impresión, pintura y venta de una réplica
                inspirada en la granada de Jinx (Arcane). Producto funcional con
                bocina interna. Vendido como pieza coleccionable con empaque
                personalizado.
              </span>
            </span>
            <span className="home-description6">
              <span>Instructor particular de Blender</span>
              <br></br>
              <span>2023 – Actualidad</span>
              <br></br>
              <span>
                Clases personalizadas de modelado, texturizado y animación en
                Blender. Orientadas a estudiantes, creativos y emprendedores.
                Enfoque práctico con resultados aplicables en branding,
                videojuegos o impresión 3D.
              </span>
            </span>
            <span className="home-description7">
              <span>Freelance 3D Artist – Proyectos variados</span>
              <br></br>
              <span>2023 – Actualidad</span>
              <br></br>
              <span>
                Encargos personalizados vía Fiverr, grupos de diseño y contacto
                directo. Diseño de personajes, renders conceptuales, assets para
                impresión 3D y animaciones.
              </span>
            </span>
            <span className="home-description8">
              <span>Licenciatura en Diseño Multimedia</span>
              <br></br>
              <span>
                Universidad Del Valle de México (UVM) — 2024 – Actualidad
              </span>
              <br></br>
              <span>
                Estudios en diseño gráfico, animación, modelado 3D, ilustración,
                branding y herramientas audiovisuales. 
              </span>
            </span>
            <Author></Author>
          </div>
          <div className="home-clients">
            <div className="home-header18">
              <h2 id="clientes" className="home-title5 heading">
                Mis Clientes
              </h2>
            </div>
            <div className="home-grid2">
              <div className="home-column1">
                <Client
                  avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHBvdHJhaXR8ZW58MHx8fHwxNjY5MDYxMjQx&amp;ixlib=rb-4.0.3&amp;h=200"
                  mention="@zeng"
                  rootClassName="clientroot-class-name"
                ></Client>
                <Client
                  quote="“Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.“"
                  author="Coco White"
                  avatar="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&amp;ixlib=rb-4.0.3&amp;h=200"
                  mention="@white_co"
                  rootClassName="clientroot-class-name1"
                ></Client>
              </div>
              <div className="home-column2">
                <Client
                  quote="“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"
                  author="Jennifer Marle"
                  avatar="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&amp;ixlib=rb-4.0.3&amp;h=200"
                  mention="@motech"
                ></Client>
                <Client
                  quote="“Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaduis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"
                  author="Maria Martinez"
                  avatar="https://images.unsplash.com/photo-1634746715098-6cafbc6a7a00?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&amp;ixlib=rb-4.0.3&amp;h=200"
                  mention="@yorgu.official"
                ></Client>
              </div>
            </div>
          </div>
          <div className="home-client-list"></div>
        </div>
        <footer className="home-footer">
          <div className="home-information">
            <div className="home-details4">
              <div className="home-header19">
                <div className="home-branding3">
                  <span id="contacto" className="home-company4">
                    Contactame
                  </span>
                </div>
                <div className="home-location1">
                  <span className="home-caption1"> </span>
                </div>
              </div>
              <div className="home-location2">
                <span className="home-caption2">Hablemos</span>
                <span className="home-value">
                  Samuel.aparicio.perez@gmail.com
                </span>
              </div>
              <button className="home-button3 start-button button">
                <span className="home-text106">Empezar un proyecto</span>
              </button>
            </div>
            <div className="home-links3">
              <span className="social">Instagram</span>
              <span className="social">Linkedin</span>
              <span className="social">Twitter</span>
              <span className="social">Dribbble</span>
              <span className="social">Behance</span>
            </div>
          </div>
        </footer>
        <div>
          <div className="home-container4">
            <Script
              html={`<script>
              (function(){
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  const img1 = document.getElementById('img1');
  const img2 = document.getElementById('img2');

  if(scrollPos > 200) { // cambia al bajar 200px
    img1.style.display = 'none';
    img2.style.display = 'block';
  } else {
    img1.style.display = 'block';
    img2.style.display = 'none';
  }
});
})()
              </script>`}
            ></Script>
          </div>
        </div>
        <div>
          <div className="home-container6">
            <Script
              html={`<script>
              (function(){
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  const img1 = document.getElementById('img1');
  const img2 = document.getElementById('img2');

  if(scrollPos > 200) { // cambia al bajar 200px
    img1.style.display = 'none';
    img2.style.display = 'block';
  } else {
    img1.style.display = 'block';
    img2.style.display = 'none';
  }
});
})()
              </script>`}
            ></Script>
          </div>
        </div>
        <div>
          <div className="home-container8">
            <Script
              html={`<script>
              (function(){
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY
    const img1 = document.getElementById("img1")
    const img2 = document.getElementById("img2")

    if (scrollPos > 200) {
      // cambia al bajar 200px
      img1.style.display = "none"
      img2.style.display = "block"
    } else {
      img1.style.display = "block"
      img2.style.display = "none"
    }
  })
})()
              </script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-header10 {
            top: 0px;
            left: 0px;
            width: 100%;
            bottom: var(--dl-layout-space-halfunit);
            height: 90px;
            display: flex;
            z-index: 100;
            position: fixed;
            align-items: center;
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: column;
            background-color: #151515;
          }
          .home-navbar-interactive {
            top: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 79px;
            display: flex;
            position: sticky;
            max-width: 1280px;
            align-items: center;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            justify-content: space-between;
          }
          .home-branding1 {
            gap: var(--dl-layout-space-halfunit);
            cursor: pointer;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
          }
          .home-lottie1 {
            width: 74px;
            height: 89px;
          }
          .home-company1 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
            text-decoration: none;
          }
          .home-items1 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            border-color: #151515;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: row;
          }
          .home-links1 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
          }
          .home-link1 {
            text-decoration: none;
          }
          .home-link2 {
            text-decoration: none;
          }
          .home-link3 {
            text-decoration: none;
          }
          .home-link4 {
            text-decoration: none;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-button1 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            padding-top: 20px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: 56px;
            padding-right: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: 20px;
            background-color: #235536;
          }
          .home-image1 {
            width: 100px;
            display: none;
            object-fit: cover;
          }
          .home-text10 {
            color: #ffffff;
            display: flex;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #151515;
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .home-branding2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-logo {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }
          .home-company2 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
          }
          .home-menu-close {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon1 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .home-items2 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-links2 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text15 {
            color: #ffffff;
          }
          .home-hero {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            background-color: #151515;
          }
          .home-header11 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            padding-top: 158px;
            flex-direction: column;
            padding-bottom: 150px;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-title1 {
            color: rgb(255, 255, 255);
            width: 720px;
            font-size: 128px;
            max-width: 895px;
            font-weight: normal;
            line-height: 115px;
            text-transform: uppercase;
          }
          .home-image2 {
            width: 282px;
            height: 280px;
            object-fit: cover;
          }
          .home-description1 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 24px;
            max-width: 800px;
            line-height: 36px;
          }
          .home-image3 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-title2 {
            align-self: flex-start;
            margin-top: var(--dl-layout-space-twounits);
            text-align: left;
            margin-left: var(--dl-layout-space-oneandhalfunits);
            margin-right: var(--dl-layout-space-halfunit);
          }
          .home-description2 {
            width: 100%;
            display: flex;
            max-width: 1280px;
            margin-top: var(--dl-layout-space-threeunits);
            align-items: flex-end;
            padding-top: var(--dl-layout-space-fiveunits);
            border-color: #151515;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            border-top-width: 1px;
          }
          .home-content {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text16 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-paragraph1 {
            font-size: 32px;
            line-height: 48px;
          }
          .home-paragraph2 {
            font-size: 32px;
            line-height: 48px;
          }
          .home-featured {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-header12 {
            width: 100%;
            display: flex;
            align-items: flex-end;
            border-color: #151515;
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-link5 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-list {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-work1 {
            gap: 140px;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-twounits);
            border-color: #151515;
            padding-left: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-twounits);
            border-bottom-width: 1px;
          }
          .home-image4 {
            width: 417px;
            height: 520px;
            object-fit: cover;
          }
          .home-details1 {
            flex: 1;
            height: 520px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .home-header13 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text18 {
            color: rgb(21, 21, 21);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
            text-transform: uppercase;
          }
          .home-text19 {
            color: rgb(21, 21, 21);
            font-size: 24px;
            line-height: 36px;
          }
          .home-tags1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-work2 {
            gap: 140px;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-twounits);
            border-color: #151515;
            padding-left: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-twounits);
            border-bottom-width: 1px;
          }
          .home-image5 {
            width: 417px;
            height: 520px;
            object-fit: cover;
          }
          .home-details2 {
            flex: 1;
            height: 520px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .home-header14 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text20 {
            color: rgb(21, 21, 21);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
            text-transform: uppercase;
          }
          .home-text23 {
            color: rgb(21, 21, 21);
            font-size: 24px;
            line-height: 36px;
          }
          .home-tags2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-work3 {
            gap: 140px;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-twounits);
            border-color: #151515;
            padding-left: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-twounits);
            border-bottom-width: 1px;
          }
          .home-image6 {
            width: 417px;
            height: 520px;
            object-fit: cover;
          }
          .home-details3 {
            flex: 1;
            height: 520px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .home-header15 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text24 {
            color: rgb(21, 21, 21);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
            text-transform: uppercase;
          }
          .home-text25 {
            color: rgb(21, 21, 21);
            font-size: 24px;
            line-height: 36px;
          }
          .home-tags3 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-services {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-header16 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: #151515;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            border-bottom-width: 1px;
          }
          .home-grid1 {
            flex: 1;
            width: 100%;
            display: grid;
            grid-gap: var(--dl-layout-space-fiveunits);
            align-items: flex-start;
            flex-direction: column;
            grid-template-columns: auto auto auto;
          }
          .home-text26 {
            display: inline-block;
          }
          .home-text34 {
            display: inline-block;
          }
          .home-text42 {
            display: inline-block;
          }
          .home-text50 {
            display: inline-block;
          }
          .home-text58 {
            display: inline-block;
          }
          .home-text68 {
            display: inline-block;
          }
          .home-about {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: #151515;
          }
          .home-header17 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            border-color: #ffffff;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            border-bottom-width: 1px;
          }
          .home-company3 {
            color: rgb(255, 255, 255);
            font-size: 80px;
            font-style: normal;
            font-weight: 500;
            line-height: 72px;
          }
          .home-description3 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            max-width: 800px;
            line-height: 36px;
          }
          .home-description4 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            max-width: 800px;
            line-height: 36px;
          }
          .home-description5 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            max-width: 800px;
            line-height: 36px;
          }
          .home-description6 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            max-width: 800px;
            line-height: 36px;
          }
          .home-description7 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            max-width: 800px;
            line-height: 36px;
          }
          .home-description8 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            max-width: 800px;
            line-height: 36px;
          }
          .home-clients {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-header18 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: #ffffff;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            border-bottom-width: 1px;
          }
          .home-title5 {
            color: rgb(255, 255, 255);
          }
          .home-grid2 {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            padding-top: var(--dl-layout-space-fiveunits);
            flex-direction: row;
          }
          .home-column1 {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            flex-direction: column;
          }
          .home-column2 {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            flex-direction: column;
          }
          .home-client-list {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            max-width: 1280px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-footer {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .home-information {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-wrap: wrap;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: 60px;
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
          }
          .home-details4 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header19 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-branding3 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-company4 {
            color: rgb(21, 21, 21);
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
            text-transform: uppercase;
          }
          .home-location1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption1 {
            color: rgb(21, 21, 21);
            font-size: 24px;
            line-height: 36px;
          }
          .home-location2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption2 {
            color: rgb(21, 21, 21);
            font-size: 24px;
            line-height: 36px;
          }
          .home-value {
            color: rgb(21, 21, 21);
            font-size: 32px;
            max-width: 560px;
            font-style: normal;
            font-weight: 500;
            line-height: 48px;
          }
          .home-button3 {
            margin-top: var(--dl-layout-space-halfunit);
          }
          .home-text106 {
            color: rgb(255, 255, 255);
          }
          .home-links3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-container4 {
            display: contents;
          }
          .home-container6 {
            display: contents;
          }
          .home-container8 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-navbar-interactive {
              padding-top: var(--dl-layout-space-unit);
            }
            .home-button1 {
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .home-image1 {
              width: 18px;
              height: 18px;
              display: flex;
            }
            .home-text10 {
              display: none;
            }
            .home-button2 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: 40px;
            }
            .home-text15 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
            .home-header11 {
              height: 100%;
              padding-bottom: var(--dl-layout-space-sixunits);
              justify-content: center;
            }
            .home-container2 {
              width: 789px;
            }
            .home-title1 {
              font-size: 40px;
              line-height: 36px;
            }
            .home-description1 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-description2 {
              margin-top: var(--dl-layout-space-threeunits);
              padding-top: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-fiveunits);
            }
            .home-text16 {
              gap: var(--dl-layout-space-unit);
            }
            .home-paragraph1 {
              font-size: 18px;
              line-height: 27px;
            }
            .home-paragraph2 {
              font-size: 18px;
              line-height: 27px;
            }
            .home-header12 {
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .home-link5 {
              display: none;
            }
            .home-work1 {
              gap: 0px;
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: 0;
              padding-right: 0;
              flex-direction: column;
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-image4 {
              width: 100%;
            }
            .home-details1 {
              gap: var(--dl-layout-space-oneandhalfunits);
              align-items: flex-start;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: 0px;
              justify-content: flex-start;
            }
            .home-header13 {
              gap: var(--dl-layout-space-unit);
            }
            .home-heading1 {
              align-items: center;
            }
            .home-text18 {
              font-size: 24px;
              line-height: 21px;
            }
            .home-text19 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-work2 {
              gap: 0px;
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: 0;
              padding-right: 0;
              flex-direction: column;
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-image5 {
              width: 100%;
            }
            .home-details2 {
              gap: var(--dl-layout-space-oneandhalfunits);
              align-items: flex-start;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: 0px;
              justify-content: flex-start;
            }
            .home-header14 {
              gap: var(--dl-layout-space-unit);
            }
            .home-heading2 {
              align-items: center;
            }
            .home-text20 {
              font-size: 24px;
              line-height: 21px;
            }
            .home-text23 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-work3 {
              gap: 0px;
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: 0;
              padding-right: 0;
              flex-direction: column;
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-image6 {
              width: 100%;
            }
            .home-details3 {
              gap: var(--dl-layout-space-oneandhalfunits);
              align-items: flex-start;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: 0px;
              justify-content: flex-start;
            }
            .home-header15 {
              gap: var(--dl-layout-space-unit);
            }
            .home-heading3 {
              align-items: center;
            }
            .home-text24 {
              font-size: 24px;
              line-height: 21px;
            }
            .home-text25 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-services {
              gap: var(--dl-layout-space-threeunits);
              padding-top: 0px;
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-header16 {
              padding-top: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-top-width: 1px;
            }
            .home-grid1 {
              display: flex;
              grid-gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-about {
              padding-top: var(--dl-layout-space-fourunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-header17 {
              gap: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .home-company3 {
              font-size: 30px;
              line-height: 27px;
            }
            .home-description3 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-description4 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-description5 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-description6 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-description7 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-description8 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-clients {
              padding-bottom: var(--dl-layout-space-fiveunits);
            }
            .home-header18 {
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .home-grid2 {
              grid-gap: var(--dl-layout-space-oneandhalfunits);
              padding-top: var(--dl-layout-space-threeunits);
              flex-direction: column;
            }
            .home-column1 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-column2 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-client-list {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-footer {
              flex-direction: column;
            }
            .home-information {
              gap: var(--dl-layout-space-threeunits);
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
              justify-content: flex-start;
            }
            .home-details4 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-company4 {
              font-size: 15px;
              line-height: 18px;
            }
            .home-caption1 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-caption2 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-value {
              font-size: 16px;
              line-height: 24px;
            }
            .home-button3 {
              font-size: 16px;
              margin-top: var(--dl-layout-space-unit);
              padding-top: 18px;
              padding-left: 26px;
              padding-right: 26px;
              padding-bottom: 18px;
            }
            .home-text106 {
              font-style: normal;
              font-weight: 500;
            }
            .home-links3 {
              gap: var(--dl-layout-space-unit);
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-top: var(--dl-layout-space-oneandhalfunits);
            }
            .home-company1 {
              font-size: 18px;
              line-height: 20px;
            }
            .home-items1 {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-button1 {
              padding: 12px;
            }
            .home-image1 {
              width: 14px;
              height: 14px;
            }
            .home-header11 {
              padding-bottom: var(--dl-layout-space-fiveunits);
            }
            .home-container2 {
              width: 659px;
            }
            .home-text106 {
              color: rgb(255, 255, 255);
              font-style: normal;
              font-weight: 500;
            }
          }
          @media (max-width: 479px) {
            .home-mobile-menu {
              padding: 16px;
            }
            .home-container2 {
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
