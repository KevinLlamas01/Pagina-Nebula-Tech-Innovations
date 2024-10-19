import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

import Header_Admin from './Header_Admin';


// CONFIGURACIÓN DE SUPABASE
const SUPABASE_URL = "https://mcngkxxvfznvlhceckpz.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jbmdreHh2ZnpudmxoY2Vja3B6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1ODYwNTgsImV4cCI6MjA0MjE2MjA1OH0.T6r0_SHNcDvy9GJND8hykmJLSFBm_rCwzzyfLOqDi7E";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export function AdminPanel() {
  const [clientes, setClientes] = useState([]);
  const [proyectos, setProyectos] = useState([]);
  const [servicios, setServicios] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [entityToDelete, setEntityToDelete] = useState(null); 
  const [entityType, setEntityType] = useState(null); 
  const [totalServicios, setTotalServicios] = useState(0); 
  const [totalProyectos, setTotalProyectos] = useState(0); 
  const [totalClientes, setTotalClientes] = useState(0); 

  
  const navigate = useNavigate();

  const handleAddNewClick = () => {
    navigate('/agregar-servicio');
  };

  const handleAddNewClienteClick = () => {
    navigate('/agregar-cliente');
  };

  const handleAddNewProyectoClick = () => {
    navigate('/agregar-proyecto');
  };

  const handleServicioSubmit = async (formData) => {
    const { data, error } = await supabase.from('Servicio').insert([formData]);
    if (error) {
      console.error(error);
    } else {
      setServicios([...servicios, data[0]]);
      navigate('/admin');
    }
  };

  const handleDeleteClick = (servicio) => {
    setEntityToDelete(servicio);
    setEntityType('servicio');
    setIsModalOpen(true);
  };

  const handleDeleteClienteClick = (cliente) => {
    setEntityToDelete(cliente);
    setEntityType('cliente');
    setIsModalOpen(true);
  };

  const handleDeleteProyectoClick = (proyecto) => {
    setEntityToDelete(proyecto);
    setEntityType('proyecto');
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (entityToDelete && entityType) {
      let response;
      switch (entityType) {
        case 'servicio':
          response = await supabase
            .from('Servicio')
            .update({ estatusServicio: 0 })
            .eq('pkServicio', entityToDelete.pkServicio);
          if (response.error) {
            console.error(response.error);
          } else {
            setServicios(servicios.filter(s => s.pkServicio !== entityToDelete.pkServicio));
            setTotalServicios(prevTotal => prevTotal - 1);
          }
          break;
        case 'cliente':
          response = await supabase
            .from('Cliente')
            .update({ estatusCliente: 0 })
            .eq('pkCliente', entityToDelete.pkCliente);
          if (response.error) {
            console.error(response.error);
          } else {
            setClientes(clientes.filter(c => c.pkCliente !== entityToDelete.pkCliente));
            setTotalClientes(prevTotal => prevTotal - 1);
          }
          break;
        case 'proyecto':
          response = await supabase
            .from('Proyecto')
            .update({ estatusProyecto: 0 })
            .eq('pkProyecto', entityToDelete.pkProyecto);
          if (response.error) {
            console.error(response.error);
          } else {
            setProyectos(proyectos.filter(p => p.pkProyecto !== entityToDelete.pkProyecto));
            setTotalProyectos(prevTotal => prevTotal - 1);
          }
          break;
        default:
          break;
      }
      setIsModalOpen(false);
      setEntityToDelete(null);
      setEntityType(null);
    }
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
    setEntityToDelete(null);
    setEntityType(null); 
  };

  useEffect(() => {
    const getClientes = async () => {
      const { data, error } = await supabase
        .from("Cliente")
        .select("logoCliente, pkCliente, nombre")
        .eq("estatusCliente", 1);
      if (error) console.error(error);
      else setClientes(data);
    };

    getClientes();
  }, []);

  useEffect(() => {
    const getProyectos = async () => {
      const { data, error } = await supabase
        .from("Proyecto")
        .select("imagenProyecto, pkProyecto, Titulo, Descripcion")
        .eq("estatusProyecto", 1);
      if (error) console.error(error);
      else setProyectos(data);
    };

    getProyectos();
  }, []);

  useEffect(() => {
    const getServicios = async () => {
      const { data, error } = await supabase
        .from("Servicio")
        .select("pkServicio, tituloServicio, descripcionServicio, imagenServicio, estatusServicio")
        .eq("estatusServicio", 1);
      if (error) console.error(error);
      else setServicios(data);
    };

    getServicios();
  }, []);

  useEffect(() => {
    const getTotalServicios = async () => {
      const { count, error } = await supabase
        .from("Servicio")
        .select("pkServicio", { count: "exact" }) 
        .eq("estatusServicio", 1);

      if (error) {
        console.error(error);
      } else {
        setTotalServicios(count); 
      }
    };

    getTotalServicios();
  }, []); 

  useEffect(() => {
    const getTotalProyectos = async () => {
      const { count, error } = await supabase
        .from("Proyecto")
        .select("pkProyecto", { count: "exact" }) 
        .eq("estatusProyecto", 1);
      if (error) {
        console.error(error);
      } else {
        setTotalProyectos(count); 
      }
    };

    getTotalProyectos();
  }, []); 

  useEffect(() => {
    const getTotalClientes = async () => {
      const { count, error } = await supabase
        .from("Cliente")
        .select("pkCliente", { count: "exact" }) 
        .eq("estatusCliente", 1);

      if (error) {
        console.error(error);
      } else {
        setTotalClientes(count); 
      }
    };

    getTotalClientes();
  }, []); 

  return (
    <div class="min-h-screen flex">
       
       <Header_Admin />

        <main class="flex-1 p-8 mb-20 ml-64 bg-gray-50">
            <header class="bg-white shadow rounded-lg mb-6 p-4">
                <h2 class="text-xl font-semibold">Bienvenido, Administrador👋</h2>
            </header>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div class="bg-white p-4 rounded-lg shadow">
                    <h3 class="font-semibold text-gray-500">Total Servicios</h3>
                    <p class="text-2xl font-bold">{totalServicios}</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow">
                    <h3 class="font-semibold text-gray-500">Total Clientes</h3>
                    <p class="text-2xl font-bold">{totalClientes}</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow">
                    <h3 class="font-semibold text-gray-500">Total Proyectos</h3>
                    <p class="text-2xl font-bold">{totalProyectos}</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow">
                    <h3 class="font-semibold text-gray-500">Visitas</h3>
                    <p class="text-2xl font-bold">123</p>
                </div>
            </div>

            <div class="space-y-8">
                <div class="bg-white shadow rounded-lg" id='servicio'>
                    <div class="p-4 border-b border-gray-200 flex justify-between items-center">
                        <h2 class="text-xl font-semibold">Servicios</h2>
                        <button onClick={handleAddNewClick} class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                            <i class="fas fa-plus mr-2"></i>Agregar Servicio
                        </button>
                    </div>
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">id</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Titulo</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            {servicios.map((servicio) => (
                                <tr key={servicio.pkServicio}>
                                  <td class="px-6 py-4 whitespace-nowrap">{servicio.pkServicio}</td>
                                  <td class="px-6 py-4 whitespace-nowrap">{servicio.tituloServicio}</td>
                                  <td class="px-6 py-4 whitespace-nowrap">{servicio.descripcionServicio}</td>
                                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button
                                      class="text-indigo-600 hover:text-indigo-900 mr-3"
                                      onClick={() => navigate(`/editar-servicio/${servicio.pkServicio}`)}
                                    >
                                      Editar
                                    </button>
                                    <button
                                      class="text-red-600 hover:text-red-900"
                                      onClick={() => handleDeleteClick(servicio)}
                                    >
                                      Eliminar
                                    </button>
                                  </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div class="bg-white shadow rounded-lg" id='cliente'>
                    <div class="p-4 border-b border-gray-200 flex justify-between items-center">
                        <h2 class="text-xl font-semibold">Clientes</h2>
                        <button onClick={handleAddNewClienteClick} class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                            <i class="fas fa-plus mr-2"></i>Agregar Cliente
                        </button>
                    </div>
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">id</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>                 
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            {clientes.map((cliente) => (
                              <tr key={cliente.pkCliente}>
                                <td class="px-6 py-4 whitespace-nowrap">{cliente.pkCliente}</td>
                                <td class="px-6 py-4 whitespace-nowrap">{cliente.nombre}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                  <button
                                    class="text-indigo-600 hover:text-indigo-900 mr-3"
                                    onClick={() => navigate(`/editar-cliente/${cliente.pkCliente}`)}
                                  >
                                    Editar
                                  </button>
                                  <button
                                    class="text-red-600 hover:text-red-900"
                                    onClick={() => handleDeleteClienteClick(cliente)}
                                  >
                                    Eliminar
                                  </button>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div class=" bg-white shadow rounded-lg" id='proyecto'>
                    <div class="p-4 border-b border-gray-200 flex justify-between items-center">
                        <h2 class="text-xl font-semibold">Proyectos</h2>
                        <button onClick={handleAddNewProyectoClick} class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                            <i class="fas fa-plus mr-2"></i>Agregar Proyecto
                        </button>
                    </div>
                    <table class="min-w-full divide-y divide-gray-200 overflow-x-auto">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">id</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Titulo</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            {proyectos.map((proyecto) => (
                                <tr key={proyecto.pkProyecto}>
                                  <td class="px-6 py-4 whitespace-nowrap">{proyecto.pkProyecto}</td>
                                  <td class="px-6 py-4 whitespace-nowrap">{proyecto.Titulo}</td>
                                  <td class="px-6 py-4 whitespace-nowrap">{proyecto.Descripcion}</td>
                                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button
                                      class="text-indigo-600 hover:text-indigo-900 mr-3"
                                      onClick={() => navigate(`/editar-proyecto/${proyecto.pkProyecto}`)}
                                    >
                                      Editar
                                    </button>
                                    <button
                                      class="text-red-600 hover:text-red-900"
                                      onClick={() => handleDeleteProyectoClick(proyecto)}
                                    >
                                      Eliminar
                                    </button>
                                  </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

               
            </div>
        </main>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 h-full">
            <div className="bg-white rounded p-6">
              <h2 className="font-semibold text-lg">Confirmar Eliminación</h2>
              <p>
                ¿Estás seguro de que deseas eliminar este {entityType}? Esta acción no se puede deshacer.
              </p>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600"
                  onClick={handleConfirmDelete}
                >
                  Confirmar
                </button>
                <button
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                  onClick={handleCancelDelete}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
          )}
    </div>
  );
}
