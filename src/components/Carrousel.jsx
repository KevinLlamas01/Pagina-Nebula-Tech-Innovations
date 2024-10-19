import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card } from './Card';
// CONFIGURACIÓN DE SUPABASE
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://mcngkxxvfznvlhceckpz.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jbmdreHh2ZnpudmxoY2Vja3B6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1ODYwNTgsImV4cCI6MjA0MjE2MjA1OH0.T6r0_SHNcDvy9GJND8hykmJLSFBm_rCwzzyfLOqDi7E";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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

const CarouselComponent = () => {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    const getServicios = async () => {
      const { data } = await supabase
        .from("Servicio")
        .select()
        .eq('estatusServicio', 1);
      setServicios(data);
    };

    getServicios();
  }, []);

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
      {servicios.map((servicio) => (
        <Card
          key={servicio.id} // Añade una clave única para cada item del carousel
          Nombre={servicio.tituloServicio}
          Detalle={servicio.descripcionServicio}
          Url={servicio.imagenServicio}
        />
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
