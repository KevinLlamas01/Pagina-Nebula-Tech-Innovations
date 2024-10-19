import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

//CONFIGURACIÓN DE SUPABASE
import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = "https://mcngkxxvfznvlhceckpz.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jbmdreHh2ZnpudmxoY2Vja3B6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1ODYwNTgsImV4cCI6MjA0MjE2MjA1OH0.T6r0_SHNcDvy9GJND8hykmJLSFBm_rCwzzyfLOqDi7E";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Carousel2 = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const getClientes = async () => {
      const { data } = await supabase.from("Cliente").select("logoCliente")
      .eq("estatusCliente", 1);
      setClientes(data);
    };

    getClientes();
  }, []);

  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={3000}
      infinite={true}
      arrows={false}
      showDots={false}
      swipeable={true}
      draggable={true}
      itemClass="carousel-item2"
    >
      {clientes.map((cliente) => (
        <img className='w-auto h-[85px]' src={cliente.logoCliente}/>
      ))}
    </Carousel>
  );
}

export default Carousel2;
