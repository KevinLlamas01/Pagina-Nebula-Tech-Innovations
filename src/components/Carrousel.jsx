import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Card } from './Card';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

import imagen from '.././assets/Aplicacion.png';

const CarouselComponent = () => {
  return (
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}
        arrows={true}
        showDots={false}
        swipeable={true}
        draggable={true}
        itemClass="carousel-item" 
      >
        <Card
          Nombre={'Aplicaciones web'}
          Detalle={'Desarrollo de aplicaciones web interactivas y funcionales.'}
          Url={imagen}
        />
        <Card
          Nombre={'Páginas webs'}
          Detalle={'Creación de sitios web personalizados para tu negocio.'}
          Url={imagen}
        />
        <Card
          Nombre={'Ecommerce'}
          Detalle={'Desarrollo de tiendas en línea para vender productos o servicios'}
          Url={imagen}
        />
        <Card
          Nombre={'Aplicación web para control de procesos de tu negoció'}
          Detalle={'Herramientas web para gestionar y optimizar procesos de tu negoció.'}
          Url={imagen}
        />
        <Card
          Nombre={'Actualización de tu página o aplicación'}
          Detalle={'Mejoras y mantenimiento de sitios web y aplicaciones existentes.'}
          Url={imagen}
        />
        <Card
          Nombre={'Asesoría'}
          Detalle={'Consultoría en tecnología y desarrollo web.'}
          Url={imagen}
        />
        <Card
          Nombre={'Diseño'}
          Detalle={'Diseño gráfico y UX/UI para tus proyectos digitales.'}
          Url={imagen}
        />
      </Carousel>
  );
};

export default CarouselComponent;
