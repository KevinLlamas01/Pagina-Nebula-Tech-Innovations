import logo from ".././assets/LogoNebula.webp";

export function Sec2_Nosotros() {
  return (
    <section id="nosotros" className="flex justify-between">
      <div className="flex justify-center items-center w-[50%]">
        <img data-aos="fade-down-right" id="img_nebula" className="w-60" src={logo} alt="Logo de Nebula Tech Innovations" />
      </div>
      <div className="bg-[#183366] flex justify-center items-center w-[50%] h-[400px]">
        <p className="text-white text-center p-5">
          Nebula Tech Innovations es una empresa especializada en el
          desarrollo web, dedicada a crear software personalizado y
          perfectamente adaptado a tus necesidades. Nuestra experiencia y
          compromiso garantizan la calidad de nuestro trabajo, adaptándonos a
          todo tipo de negocio.
        </p>
      </div>
    </section>
  );
}
