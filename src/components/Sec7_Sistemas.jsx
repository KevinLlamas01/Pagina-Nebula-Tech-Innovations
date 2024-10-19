import React, { useState, useEffect } from 'react';
import { Sistema } from './Sistema';

//CONFIGURACIÓN DE SUPABASE
import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = "https://mcngkxxvfznvlhceckpz.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jbmdreHh2ZnpudmxoY2Vja3B6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1ODYwNTgsImV4cCI6MjA0MjE2MjA1OH0.T6r0_SHNcDvy9GJND8hykmJLSFBm_rCwzzyfLOqDi7E";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export function Sec7_Sistemas() {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    const getProyectos = async () => {
      const { data } = await supabase.from("Proyecto").select("imagenProyecto, Titulo").eq("estatusProyecto", 1);
      setProyectos(data);
    };

    getProyectos();
  }, []);

  return (
    <section id="sistemas" className="flex justify-center flex-col p-2 mt-20">
      <h3 className="text-3xl text-center font-bold pb-6">Nuestros sistemas</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {proyectos.map((proyecto, index) => (
          <Sistema
            key={index}
            Nombre={proyecto.Titulo}
            Url={proyecto.imagenProyecto}
          />
        ))}
      </div>
    </section>
  );
}