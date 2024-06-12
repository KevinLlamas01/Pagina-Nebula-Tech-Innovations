import logo from '.././assets/LogoNebula.webp';

export function Header() {
  return (
   <header className='bg-transparent text-white w-[100%] flex justify-evenly flex-row items-center fixed'>
        <div className='flex flex-row items-center'>
            <img className='w-[4rem] h-[4rem]' src={logo} alt="Logo de Nebula Tech Innovations" />
            <h1>Nebula Tech Innovations</h1>
        </div>
        <nav>
            <ul className='flex flex-row justify-between gap-4'>
                <li>Inicio</li>
                <li>Sobre nosotros</li>
                <li>Servicios</li>
                <li>Clientes</li>
                <li>Nuestros sistemas</li>
                <li>Contactanos</li>
            </ul>
        </nav>
   </header>
  );
}
