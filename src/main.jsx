import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

// COMPONENTES
import { Header } from "./components/Header.jsx";
import { Sec1_Inicio } from "./components/Sec1_Inicio.jsx";
import { Sec2_Nosotros } from "./components/Sec2_Nosotros.jsx";
import { Sec3_Servicios } from "./components/Sec3_Servicios.jsx";
import { Sec4_Diseño } from "./components/Sec4_Diseño.jsx";
import { Sec5_Clientes } from "./components/Sec5_Clientes.jsx";
import { Sec6_Reportes } from "./components/Sec6_Reportes.jsx";
import { Sec7_Sistemas } from "./components/Sec7_Sistemas.jsx";
import { Footer } from "./components/Footer.jsx";
import { AdminPanel } from "./components/Panel.jsx";
import { Login } from "./components/Login.jsx";
import { AgregarServicio } from "./components/agregarServicios.jsx";
import { AgregarCliente } from "./components/agregarClientes.jsx";
import { AgregarProyecto } from "./components/agregarProyectos.jsx";

import { EditarServicio } from './components/editarServicios.jsx';
import { EditarCliente } from './components/editarClientes.jsx';
import { EditarProyecto } from './components/editarProyectos.jsx';


import {CalcularCotizacion} from './components/calculadora.jsx';
// ESTILOS
import "./css/normalize.css";
import "./css/styles.css";

const App = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    AOS.init();
    const timer = setTimeout(() => {
      setShowHeader(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showHeader && <Header className="fade-in" />}
      <main className="bg-gray-50">
        <Sec1_Inicio />
        <Sec2_Nosotros />
        <Sec3_Servicios />
        <Sec4_Diseño />
        <Sec5_Clientes />
        <Sec6_Reportes />
        <Sec7_Sistemas />
        <CalcularCotizacion/>
      </main>
      <Footer />
    </>
  );
};

const ProtectedRoute = ({ element, isAuthenticated, redirectTo = "/login" }) => {
  return isAuthenticated ? element : <Navigate to={redirectTo} />;
};

const MainRouter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleServicioSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/admin"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<AdminPanel />} />}
        />
        <Route
          path="/agregar-servicio"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<AgregarServicio onSubmit={handleServicioSubmit} />} />}
        />
        <Route
          path="/agregar-cliente"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<AgregarCliente onSubmit={handleServicioSubmit} />} />}
        />
        <Route
          path="/agregar-proyecto"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<AgregarProyecto onSubmit={handleServicioSubmit} />} />}
        />
        <Route
          path="/editar-servicio/:id"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<EditarServicio />} />}
        />
        <Route
          path="/editar-cliente/:id"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<EditarCliente />} />}
        />
        <Route
          path="/editar-proyecto/:id"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<EditarProyecto />} />}
        />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainRouter />);
