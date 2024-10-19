import logo from '.././assets/LogoNebula.webp';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-scroll';
import { DarkThemeToggle } from "flowbite-react";

export function Header() {
  return (
      <Navbar className="flex fixed border-b shadow-xl w-[100%] z-50">
          <Navbar.Brand className='px-5'>
              <img className="w-[3rem] h-[3rem]" src={logo} alt="Logo de Nebula Tech Innovations" />
              <span className="self-center text-lg md:text-2xl font-semibold whitespace-nowrap">Nebula Tech Innovations</span>
          </Navbar.Brand>
          <Navbar.Toggle className="border-white  hover:text-white hover:ring-white focus:ring-white"/>
          <Navbar.Collapse className="px-5">
              <Link to="inicio" smooth={true} duration={500} offset={-150}  className=' hover:text-white md:hover:text-blue-800 px-2 rounded-lg border-opacity-0 cursor-pointer'>Inicio</Link>
              <Link to="nosotros" smooth={true} duration={500} offset={-150}  className=' hover:text-white md:hover:text-blue-800 px-2 rounded-lg border-opacity-0 cursor-pointer'>Sobre Nosotros</Link>
              <Link to="servicios" smooth={true} duration={500} offset={-150}  className=' hover:text-white md:hover:text-blue-800 px-2 rounded-lg border-opacity-0 cursor-pointer'>Servicios</Link>
              <Link to="clientes" smooth={true} duration={500} offset={-150}  className=' hover:text-white md:hover:text-blue-800 px-2 rounded-lg border-opacity-0 cursor-pointer'>Clientes</Link>
              <Link to="sistemas" smooth={true} duration={500} offset={-150}  className=' hover:text-white md:hover:text-blue-800 px-2 rounded-lg border-opacity-0 cursor-pointer'>Nuestros sistemas</Link>
              <Link to="calculadora" smooth={true} duration={500} offset={-150}  className=' hover:text-white md:hover:text-blue-800 px-2 rounded-lg border-opacity-0 cursor-pointer'>Cotización</Link>
              <Link to="contactanos" smooth={true} duration={500} offset={-150}  className=' hover:text-white md:hover:text-blue-800 px-2 rounded-lg border-opacity-0 cursor-pointer'>Contáctanos</Link>
          </Navbar.Collapse>
      </Navbar>
  );
}

