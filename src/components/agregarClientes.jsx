import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import Header_Admin from './Header_Admin';

const SUPABASE_URL = "https://mcngkxxvfznvlhceckpz.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jbmdreHh2ZnpudmxoY2Vja3B6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1ODYwNTgsImV4cCI6MjA0MjE2MjA1OH0.T6r0_SHNcDvy9GJND8hykmJLSFBm_rCwzzyfLOqDi7E";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export function AgregarCliente() {
  const [nombre, setNombre] = useState("");
  const [logo, setLogo] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileType = file.type.split('/')[1];
      if (['jpeg', 'jpg', 'png'].includes(fileType)) {
        setLogo(file);
      } else {
        alert('Por favor, selecciona una imagen en formato JPEG o PNG.');
        event.target.value = null;
      }
    }
  };

  const uploadImage = async () => {
    if (!logo) return null;

    setUploading(true);
    try {
      const fileExt = logo.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `img/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('img')
        .upload(filePath, logo);

      if (uploadError) {
        throw uploadError;
      }

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
    if (!nombre || !logo) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const imageUrl = await uploadImage();
    if (!imageUrl) {
      alert('Hubo un problema al subir la imagen. Por favor, inténtalo de nuevo.');
      return;
    }

    try {
      const { error } = await supabase
        .from('Cliente')
        .insert([{ 
          nombre, 
          logoCliente: imageUrl, 
          estatusCliente: 1,
        }]);

      if (error) throw error;

      alert('Cliente agregado con éxito!');
      navigate('/admin');
    } catch (error) {
      console.error('Error al agregar cliente:', error);
      alert('Hubo un error al agregar el cliente. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div class="min-h-screen flex">
       
        <Header_Admin />

        <main class="flex-1 p-8 mb-20 ml-64 bg-gray-50">
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Agregar Nuevo Cliente</h2>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" >Nombre del Cliente:</label>
                <input 
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text" 
                  value={nombre} 
                  onChange={(e) => setNombre(e.target.value)} 
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Logo del Cliente:
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
                        onChange={handleFileChange}
                        accept="image/jpeg, image/png"
                        required
                        className="sr-only" 
                        id="logo" 
                      />
                      <label 
                        htmlFor="logo" 
                        className="cursor-pointer text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <span className="text-sm">o arrastrar y soltar</span>
                      </label>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG hasta 10MB</p>
                  </div>
                </div>
                {logo && <p className="mt-2 text-sm text-gray-500">{logo.name}</p>}
              </div>

              <div className="flex items-center justify-center">
                  <button 
                    className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    type="submit" 
                    disabled={uploading}
                  >
                    {uploading ? 'Subiendo...' : 'Agregar Cliente'}
                  </button>
               </div>
            </form>
        </div>
        </main>
    </div>
  );
}