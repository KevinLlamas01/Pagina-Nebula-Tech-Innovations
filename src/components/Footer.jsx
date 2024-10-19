import logo from '.././assets/LogoNebula.webp';
import {FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

export function Footer() {
    return (
        <footer className="bg-[#183366]">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="flex flex-col items-start justify-around md:flex-row">
                    <div className='flex justify-center'>
                        <img className="w-[4rem] h-[4rem]" src={logo} alt="Logo de Nebula Tech Innovations" />
                        <span className="self-center text-2xl text-white font-semibold whitespace-nowrap">Nebula Tech Innovations</span>
                    </div>
                    <div>
                        <span className="text-sm text-white font-semibold whitespace-nowrap">Contactanos</span>
                        <div className='flex justify-start'>
                            <a href='mailto:nebulatechinnovations@gmail.com' className='flex items-center pe-2'>
                                <FaEnvelope className='text-white' />
                            </a>
                            <a className="text-sm text-white whitespace-nowrap hover:underline" href="mailto:nebulatechinnovations@gmail.com">nebulatechinnovations@gmail.com</a>
                        </div>
                        <div className='flex justify-start'>
                            <a href='tel:+6951228328' className='flex items-center pe-2'>
                                <FaPhone className='text-white' />
                            </a>
                            <a className="text-sm text-white whitespace-nowrap hover:underline" href="tel:+6951228328">(695)1228328</a>
                        </div>
                    </div>
                    <div>
                        <span className='text-sm text-white font-semibold whitespace-nowrap'>Siguenos en</span>
                        <div className='flex justify-start'>
                            <a href='https://www.facebook.com/profile.php?id=61561683762198' className='flex items-center pe-2'>
                                <FaFacebook className='text-white' />
                            </a>
                            <a className="text-sm text-white whitespace-nowrap hover:underline" href="https://www.facebook.com/profile.php?id=61561683762198">Nebula Tech Innovations</a>
                        </div>
                        <div className='flex justify-start'>
                            <a href='https://www.linkedin.com/company/104571061/admin/feed/posts/' className='flex items-center pe-2'>
                                <FaLinkedin className='text-white' />
                            </a>
                            <a className="text-sm text-white whitespace-nowrap hover:underline" href="https://www.linkedin.com/company/104571061/admin/feed/posts/">Nebula Tech Innovations</a>
                        </div>
                        <div className='flex justify-start'>
                            <a href='https://www.instagram.com/nebula_tech_innovations/' className='flex items-center pe-2'>
                                <FaInstagram className='text-white' />
                            </a>
                            <a className="text-sm text-white whitespace-nowrap hover:underline" href="https://www.instagram.com/nebula_tech_innovations/">nebula_tech_innovations</a>
                        </div>
                        <div className='flex justify-start'>
                            <a href='https://x.com/NebulaTech3' className='flex items-center pe-2'>
                                <svg className='text-white' fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
                            </a>
                            <a className="text-sm text-white whitespace-nowrap hover:underline" href="https://x.com/NebulaTech369">@NebulaTech369</a>
                        </div>
                        
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-white sm:text-center">© 2024 <a href="#" className="hover:underline">Nebula Tech Innovations™</a>. Todos los derechos reservados.</span>
            </div>
        </footer>
    );
}
