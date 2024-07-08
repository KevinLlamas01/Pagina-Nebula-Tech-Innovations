import imagen from ".././assets/prueba.jpg";

export function Sec7_Sistemas() {
  return (
    <section id="sistemas" className="flex justify-center flex-col p-2 mt-20">
      <h3 className="text-3xl text-center font-bold pb-6">Nuestros sistemas</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="h-[15rem] lg:h-[30rem] md:h-[15rem] w-[100%] flex flex-col justify-center items-center gap-8 bg-[url('.././assets/prueba.jpg')] bg-cover bg-center bg-no-repeat">
          <h1 className="text-2xl">Nombre</h1>
          <a href="#" className="underline hover:text-white">Ver detalles</a>
        </div>
        <div className="h-[15rem] lg:h-[30rem] md:h-[15rem] w-[100%] flex flex-col justify-center items-center gap-8 bg-[url('.././assets/prueba.jpg')] bg-cover bg-center bg-no-repeat">
          <h1 className="text-2xl">Nombre</h1>
          <a href="#" className="underline">Ver detalles</a>
        </div>
        <div className="h-[15rem] lg:h-[30rem] md:h-[15rem] w-[100%] flex flex-col justify-center items-center gap-8 bg-[url('.././assets/prueba.jpg')] bg-cover bg-center bg-no-repeat">
          <h1 className="text-2xl">Nombre</h1>
          <a href="#" className="underline">Ver detalles</a>
        </div>
        <div className="h-[15rem] lg:h-[30rem] md:h-[15rem] w-[100%] flex flex-col justify-center items-center gap-8 bg-[url('.././assets/prueba.jpg')] bg-cover bg-center bg-no-repeat">
          <h1 className="text-2xl">Nombre</h1>
          <a href="#" className="underline">Ver detalles</a>
        </div>
        <div className="h-[15rem] lg:h-[30rem] md:h-[15rem] w-[100%] flex flex-col justify-center items-center gap-8 bg-[url('.././assets/prueba.jpg')] bg-cover bg-center bg-no-repeat">
          <h1 className="text-2xl">Nombre</h1>
          <a href="#" className="underline">Ver detalles</a>
        </div>
        <div className="h-[15rem] lg:h-[30rem] md:h-[15rem] w-[100%] flex flex-col justify-center items-center gap-8 bg-[url('.././assets/prueba.jpg')] bg-cover bg-center bg-no-repeat">
          <h1 className="text-2xl">Nombre</h1>
          <a href="#" className="underline">Ver detalles</a>
        </div>
      </div>
    </section>
  );
}
