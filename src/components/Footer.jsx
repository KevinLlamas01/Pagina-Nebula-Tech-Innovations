import logo from '.././assets/LogoNebula.webp';

export function Footer() {
  return (
    <footer className="bg-[#183366]">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img className="w-[4rem] h-[4rem]" src={logo} alt="Logo de Nebula Tech Innovations" />
                    <span className="self-center text-2xl text-white font-semibold whitespace-nowrap">Nebula Tech Innovations</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Nosotros</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Servicios</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Clientes</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contactanos</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span className="block text-sm text-white sm:text-center">© 2024 <a href="#" className="hover:underline">Nebula Tech Innovations™</a>. All Rights Reserved.</span>
        </div>
    </footer>
  );
}
