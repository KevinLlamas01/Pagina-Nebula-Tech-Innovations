import React, { useState } from 'react';

export function CalcularCotizacion() {
  const [cantidadModulos, setCantidadModulos] = useState(1);
  const [tipoAplicacion, setTipoAplicacion] = useState('web');
  const [complejidad, setComplejidad] = useState('baja');
  const [precioTotal, setPrecioTotal] = useState(0);

  const calcularPrecio = () => {
    const costoPorModulo = 5000; // Precio base por módulo en pesos
    let multiplicadorTipo = 1;

    switch (tipoAplicacion) {
      case 'Híbrida':
        multiplicadorTipo = 1.5;
        break;
      case 'Móvil':
        multiplicadorTipo = 2;
        break;
      case 'Web':
      default:
        multiplicadorTipo = 1;
    }

    let multiplicadorComplejidad = 1;

    switch (complejidad) {
      case 'Media':
        multiplicadorComplejidad = 1.2;
        break;
      case 'Alta':
        multiplicadorComplejidad = 1.5;
        break;
      case 'Baja':
      default:
        multiplicadorComplejidad = 1;
    }

    const precio =
      cantidadModulos * costoPorModulo * multiplicadorTipo * multiplicadorComplejidad;
    setPrecioTotal(precio);
  };

  return (
    <section id="calculadora" class="min-h-screen flex items-center justify-center p-4 ">
      <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
          <div class="flex items-center justify-center mb-6">
              <i class="fas fa-calculator text-blue-500 text-2xl mr-2"></i>
              <h1 class="text-2xl font-bold text-gray-800">Calculadora de Cotización</h1>
          </div>
          <div class="space-y-4">
              <div>
                  <label for="cantidadModulos" class="block text-sm font-medium text-gray-700 mb-1">
                      Cantidad de Módulos
                  </label>
                  <input
                     type="number"
                     value={cantidadModulos}
                     onChange={(e) => setCantidadModulos(e.target.value)}
                     min="1"
                     class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
              </div>
              <div>
                  <label for="tipoAplicacion" class="block text-sm font-medium text-gray-700 mb-1">
                      Tipo de Aplicación
                  </label>
                  <select
                      value={tipoAplicacion}
                      onChange={(e) => setTipoAplicacion(e.target.value)}
                      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                        <option value="" selected>Seleccione un Tipo</option>
                        <option value="Web">Web</option>
                        <option value="Híbrida">Híbrida</option>
                        <option value="Móvil">Móvil</option>
                  </select>
              </div>
              <div>
                  <label for="complejidad" class="block text-sm font-medium text-gray-700 mb-1">
                      Nivel de Complejidad
                  </label>
                  <select
                      value={complejidad}
                      onChange={(e) => setComplejidad(e.target.value)}
                      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                      <option value="" selected>Seleccione un Nivel</option>
                      <option value="Baja">Baja</option>
                      <option value="Media">Media</option>
                      <option value="Alta">Alta</option>
                  </select>
              </div>
          </div>
          <button
              onClick={calcularPrecio}
              class="mt-6 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
          >
              Calcular Precio
          </button>
          <div class="mt-6 text-center">
              <h2 class="text-lg font-semibold text-gray-800">Precio Total:</h2>
              <p id="precioTotal" class="text-3xl font-bold text-blue-600">${precioTotal.toFixed(2)} MXN</p>
          </div>
      </div>
    </section>
  );
}
