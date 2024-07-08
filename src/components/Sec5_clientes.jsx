import Carousel2 from "./Carrousel2";

export function Sec5_Clientes() {
  return (
    <section id="clientes" className="mt-20">
      <div className="flex justify-center items-center h-[200px] bg-[url('.././assets/Nebula.jpg')]  bg-cover bg-center bg-no-repeat mb-6" >
        <h3 className="text-white font-bold text-2xl text-center">Clientes de Nebula Tech Innovations</h3>
      </div>
      <div className="mx-20">
      <Carousel2/>
      </div>
    </section>
  );
}
