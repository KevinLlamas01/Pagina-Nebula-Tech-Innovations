import logo from '.././assets/LogoNebula.webp';
import { Navbar } from 'flowbite-react';
import { DarkThemeToggle } from "flowbite-react";

export function Header() {
  return (
      <Navbar className="flex fixed border-b shadow-xl w-[100%]">
          <Navbar.Brand className='px-5'>
              <img className="w-[4rem] h-[4rem]" src={logo} alt="Logo de Nebula Tech Innovations" />
              <span className="self-center text-lg md:text-2xl font-semibold whitespace-nowrap">Nebula Tech Innovations</span>
          </Navbar.Brand>
          <Navbar.Toggle className="border-white hover:bg-[#183366] hover:text-white hover:ring-white focus:ring-white"/>
          <Navbar.Collapse className="px-5">
              <Navbar.Link href="#" className='hover:bg-[#183366] hover:text-white md:hover:text-blue-800 px-2 rounded-lg border-opacity-0'>Inicio</Navbar.Link>
              <Navbar.Link href="#" className='hover:bg-[#183366] hover:text-white md:hover:text-blue-800 px-2 rounded-lg border-opacity-0'>Sobre Nosotros</Navbar.Link>
              <Navbar.Link href="#" className='hover:bg-[#183366] hover:text-white md:hover:text-blue-800 px-2 rounded-lg border-opacity-0'>Servicios</Navbar.Link>
              <Navbar.Link href="#" className='hover:bg-[#183366] hover:text-white md:hover:text-blue-800 px-2 rounded-lg border-opacity-0'>Clientes</Navbar.Link>
              <Navbar.Link href="#" className='hover:bg-[#183366] hover:text-white md:hover:text-blue-800 px-2 rounded-lg border-opacity-0'>Contactanos</Navbar.Link>
          </Navbar.Collapse>
      </Navbar>
  );
}
