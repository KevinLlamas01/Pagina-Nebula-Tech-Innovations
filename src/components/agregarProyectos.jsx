import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import Header_Admin from './Header_Admin';

// Configuración de Supabase
const SUPABASE_URL = "https://mcngkxxvfznvlhceckpz.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jbmdreHh2ZnpudmxoY2Vja3B6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1ODYwNTgsImV4cCI6MjA0MjE2MjA1OH0.T6r0_SHNcDvy9GJND8hykmJLSFBm_rCwzzyfLOqDi7E";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export function AgregarProyecto() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagenProyecto, setImagenProyecto] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "imagenProyecto") {
      const file = e.target.files[0];
      if (file && ['jpeg', 'jpg', 'png'].includes(file.type.split('/')[1])) {
        setImagenProyecto(file);
      } else {
        alert("Solo se admiten archivos en formato imágenes (jpg, jpeg, png)");
      }
    } else {
      if (name === "titulo") setTitulo(value);
      if (name === "descripcion") setDescripcion(value);
    }
  };

  const uploadImage = async () => {
    if (!imagenProyecto) return null;
    setUploading(true);
    try {
      const fileExt = imagenProyecto.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `img/${fileName}`;
      const { error: uploadError } = await supabase.storage
        .from('img')
        .upload(filePath, imagenProyecto);
      if (uploadError) throw uploadError;
      const { data } = supabase.storage.from('img').getPublicUrl(filePath);
      setUploading(false);
      return data.publicUrl;
    } catch (error) {
      console.error('Error al subir la imagen:', error);
      setUploading(false);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageUrl = await uploadImage();
    if (!imageUrl) {
      alert('Hubo un problema al subir la imagen. Por favor, inténtalo de nuevo.');
      return;
    }
    const { data, error } = await supabase
      .from('Proyecto')
      .insert([{
        Titulo: titulo,
        Descripcion: descripcion,
        imagenProyecto: imageUrl,
        estatusProyecto: 1, // O el valor que desees asignar por defecto
      }]);
    if (error) {
      console.error('Error al agregar proyecto:', error);
      alert('Hubo un error al agregar el proyecto. Inténtalo de nuevo.');
    } else {
      console.log('Proyecto agregado:', data);
      navigate('/admin');
    }
  };

  return (
    <div className="min-h-screen flex">
      <Header_Admin />
      <main className="flex-1 p-8 mb-20 ml-64 bg-gray-50">
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Agregar Nuevo Proyecto</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Título del Proyecto:</label>
              <input
                type="text"
                name="titulo"
                value={titulo}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Descripción:</label>
              <textarea
                name="descripcion"
                value={descripcion}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Imagen del Proyecto:
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
                      name="imagenProyecto"
                      onChange={handleChange}
                      accept="image/jpeg, image/png"
                      required
                      className="sr-only"
                      id="imagenProyecto"
                    />
                    <label
                      htmlFor="imagenProyecto"
                      className="cursor-pointer text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="text-sm">o arrastrar y soltar</span>
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG hasta 10MB</p>
                </div>
              </div>
              {imagenProyecto && <p className="mt-2 text-sm text-gray-500">{imagenProyecto.name}</p>}
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                disabled={uploading}
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                {uploading ? 'Agregando...' : 'Agregar Proyecto'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
