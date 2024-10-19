import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { decode } from 'base64-arraybuffer';
import Header_Admin from './Header_Admin';

// CONFIGURACIÓN DE SUPABASE
const SUPABASE_URL = "https://mcngkxxvfznvlhceckpz.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jbmdreHh2ZnpudmxoY2Vja3B6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1ODYwNTgsImV4cCI6MjA0MjE2MjA1OH0.T6r0_SHNcDvy9GJND8hykmJLSFBm_rCwzzyfLOqDi7E";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export function AgregarServicio() {
  const [nombre, setNombre] = useState(""); 
  const [archivoUrl, setArchivoUrl] = useState(""); 
  const [descripcion, setDescripcion] = useState(""); 
  const [uploading, setUploading] = useState(false); 
  const navigate = useNavigate(); 

  function procesarArchivo(e) {
    if (e.target.files && e.target.files.length > 0) {
      const archivo = e.target.files[0];
      const extension = archivo.name.split('.').pop().toLowerCase();
      const extensionesPermitidas = ['jpg', 'jpeg', 'png'];

      if (extensionesPermitidas.includes(extension)) {
        let reader = new FileReader();
        reader.readAsDataURL(archivo);
        reader.onload = (f) => {
          console.log(f.target.result);
          subirImagen(archivo.name, f.target.result);
        };
      } else {
        alert("Solo se admiten archivos en formato imágenes (jpg, jpeg, png)");
        e.target.value = "";
      }
    }
  }

  const subirImagen = async (nombre, base64Archivo) => {
    setUploading(true);
    try {
      const imagen = base64Archivo.split('base64,')[1];
      const { data, error } = await supabase.storage
        .from('img')
        .upload(`servicios/${nombre}`, decode(imagen), {
          contentType: 'image/' + nombre.split('.').pop().toLowerCase()
        });

      if (error) throw error;

      const { data: urlData } = supabase.storage.from('img').getPublicUrl(`servicios/${nombre}`);
      console.log(urlData.publicUrl);
      setArchivoUrl(urlData.publicUrl);
    } catch (error) {
      console.error('Error al subir la imagen:', error);
      alert('Hubo un error al subir la imagen. Inténtalo de nuevo.');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => { 
    e.preventDefault(); 

    if (!nombre || !descripcion || !archivoUrl) {
      alert('Por favor, completa todos los campos y sube una imagen.');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('Servicio')
        .insert([{ 
          tituloServicio: nombre, 
          descripcionServicio: descripcion, 
          imagenServicio: archivoUrl, 
          estatusServicio: 1,
        }]);

      if (error) throw error;

      console.log('Servicio agregado:', data);
      alert('Servicio agregado con éxito!');
      navigate('/admin'); 
    } catch (error) {
      console.error('Error al agregar servicio:', error);
      alert('Hubo un error al agregar el servicio. Inténtalo de nuevo.');
    }
  };

  return ( 
    <div className="min-h-screen flex">
      <Header_Admin />
      <main className="flex-1 p-8 mb-20 ml-64 bg-gray-50">
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Agregar Nuevo Servicio</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Nombre del Servicio:</label>
              <input 
                type="text" 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              /> 
            </div> 
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Descripción:</label>
              <textarea 
                value={descripcion} 
                onChange={(e) => setDescripcion(e.target.value)} 
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea> 
            </div> 
            <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Imagen del Servicio:
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 bg-gray-200 flex items-center justify-center rounded-full">
                    <span className="text-gray-400">+</span>
                  </div>
                  <p className="mt-2 text-gray-600">Subir un archivo</p>
                  <input
                    type="file"
                    name="imagenServicio"
                    onChange={procesarArchivo}
                    accept="image/jpeg, image/png"
                    required
                    className="sr-only"
                    id="imagenServicio"
                  />
                  <label
                    htmlFor="imagenServicio"
                    className="cursor-pointer text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="text-sm">o arrastrar y soltar</span>
                  </label>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG hasta 10MB</p>
              </div>
            </div>
            {archivoUrl && <p className="mt-2 text-sm text-gray-500">{archivoUrl.split('/').pop()}</p>}
          </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                disabled={uploading}
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                {uploading ? 'Agregando...' : 'Agregar Servicio'}
              </button>
            </div>
          </form>
        </div>
      </main> 
    </div>
  ); 
}
