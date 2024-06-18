import Carousel2 from "./Carrousel2";

export function Sec5_Clientes() {
  return (
    <section id="clientes">
      <div className="flex justify-center items-center h-[200px] bg-[url('.././assets/Nebula.jpg')]  bg-cover bg-center bg-no-repeat" >
        <h3 className="text-white font-bold text-2xl text-center">Clientes de Nebula Tech Innovations</h3>
      </div>
      <div className="p-14">
      <Carousel2/>
      </div>
    </section>
  );
}
