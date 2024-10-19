import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import Header_Admin from './Header_Admin';

// Configuración de Supabase
const SUPABASE_URL = "https://mcngkxxvfznvlhceckpz.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jbmdreHh2ZnpudmxoY2Vja3B6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1ODYwNTgsImV4cCI6MjA0MjE2MjA1OH0.T6r0_SHNcDvy9GJND8hykmJLSFBm_rCwzzyfLOqDi7E";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export function EditarServicio() {
  const { id } = useParams();
  const [servicio, setServicio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    imagenDescripcion: null,
  });
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServicio = async () => {
      const { data, error } = await supabase
        .from('Servicio')
        .select('*')
        .eq('pkServicio', id)
        .single();
      if (error) {
        setError(error.message);
      } else {
        setServicio(data);
        setFormData({
          nombre: data.tituloServicio || '',
          descripcion: data.descripcionServicio || '',
          imagenDescripcion: data.imagenServicio || null,
        });
      }
      setLoading(false);
    };
    fetchServicio();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type.split('/')[1];
      if (['jpeg', 'jpg', 'png'].includes(fileType)) {
        setFormData(prev => ({ ...prev, imagenDescripcion: file }));
      } else {
        alert('Por favor, selecciona una imagen en formato JPEG o PNG.');
        e.target.value = null;
      }
    }
  };

  const uploadImage = async () => {
    if (!formData.imagenDescripcion || typeof formData.imagenDescripcion === 'string') return formData.imagenDescripcion;
    setUploading(true);
    try {
      const fileExt = formData.imagenDescripcion.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `img/${fileName}`;
      const { error: uploadError } = await supabase.storage
        .from('img')
        .upload(filePath, formData.imagenDescripcion);
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
    let imageUrl = await uploadImage();
    if (!imageUrl && typeof formData.imagenDescripcion === 'object') {
      alert('Hubo un problema al subir la imagen. Por favor, inténtalo de nuevo.');
      return;
    }
    try {
      const { error } = await supabase
        .from('Servicio')
        .update({
          tituloServicio: formData.nombre,
          descripcionServicio: formData.descripcion,
          imagenServicio: imageUrl || formData.imagenDescripcion
        })
        .eq('pkServicio', id);
      if (error) throw error;
      alert('¡Servicio actualizado con éxito!');
      navigate('/admin');
    } catch (error) {
      console.error('Error al actualizar el servicio:', error);
      alert('Hubo un error al actualizar el servicio. Por favor, inténtalo de nuevo.');
    }
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen flex">
      <Header_Admin />
      <main className="flex-1 p-8 mb-20 ml-64 bg-gray-50">
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Editar Servicio</h1>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre del Servicio:</label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">Descripción:</label>
              <textarea
                name="descripcion"
                id="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              ></textarea>
            </div>
            
            {formData.imagenDescripcion && typeof formData.imagenDescripcion === 'string' && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">Imagen actual del Servicio:</label>
                <div className="flex items-center justify-center">
                      <img src={formData.imagenDescripcion} alt="Servicio" className="mt-2 max-w-xs" />
                </div>
              </div>
            )}
            
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagenDescripcion">Imagen nueva del Servicio:</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <div className="flex flex-col items-center">
                    <div className="h-12 w-12 bg-gray-200 flex items-center justify-center rounded-full">
                      <span className="text-gray-400">+</span>
                    </div>
                    <p className="mt-2 text-gray-600">Subir un archivo</p>
                    <input
                      type="file"
                      name="imagenDescripcion"
                      id="imagenDescripcion"
                      onChange={handleFileChange}
                      accept="image/jpeg, image/png"
                      className="sr-only"
                    />
                    <label
                      htmlFor="imagenDescripcion"
                      className="cursor-pointer text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="text-sm">o arrastrar y soltar</span>
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG hasta 10MB</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                disabled={uploading}
              >
                {uploading ? 'Actualizando...' : 'Actualizar Servicio'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
