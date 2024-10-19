import React, { useState, useEffect } from 'react'; 

import logo from ".././assets/LogoNebula.webp";
import { Link } from 'react-scroll';
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function Header_Admin() {

    const location = useLocation(); 
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(true); 
   
    function handleLogout() {
            setIsAuthenticated(false);
            localStorage.removeItem("setIsAuthenticated"); 
            navigate("/login");
        }

    return (
        <aside className="bg-gray-800 text-white w-64 flex-shrink-0 fixed h-full flex flex-col transform -translate-x-full md:translate-x-0 transition-transform duration-200 ease-in-out">
            <div className="flex items-center justify-center mt-4">       
                <img id="img_nebula" className="w-32" src={logo} alt="Logo de Nebula Tech Innovations" />
            </div>
            <div className="text-center mt-2">
                <h1 className="text-2xl font-semibold">Panel | Nebula</h1>
            </div>
            <nav className="mt-4 flex-grow">
                {location.pathname === "/admin" ? (
                <>
                    <Link to="servicio" smooth={true} duration={500} offset={-150} className="block py-2 px-6 hover:bg-gray-700 cursor-pointer">Servicios</Link>
                    <Link to="cliente" smooth={true} duration={500} offset={-150} className="block py-2 px-6 hover:bg-gray-700 cursor-pointer">Clientes</Link>
                    <Link to="proyecto" smooth={true} duration={500} offset={-150} className="block py-2 px-6 hover:bg-gray-700 cursor-pointer">Proyectos</Link>
                </>
                ) : (
                <RouterLink to="/admin" smooth={true} duration={500} offset={-150} className="block py-2 px-6 hover:bg-gray-700 cursor-pointer">Inicio</RouterLink>
                )}
            </nav>
            <div className="text-center mt-auto mb-4">
                 <a onClick={handleLogout}  className="block py-2 px-6 hover:bg-gray-700 cursor-pointer">
                    Cerrar Sesión <i className='fa fa-sign-out ml-1'></i>
                </a>
            </div>
        </aside>
  );
};
  