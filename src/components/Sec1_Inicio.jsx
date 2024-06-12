import { useState, useEffect } from 'react';

export function Sec1_Inicio() {
  const [dynamicText, setDynamicText] = useState('Cada modelo de negocio');
  const [isVisible, setIsVisible] = useState(true);
  const texts = ['Cada modelo de negocio', 'Tu emprendimiento', 'Tu empresa', 'Tus ideas'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setDynamicText(prevText => {
          const currentIndex = texts.indexOf(prevText);
          const nextIndex = (currentIndex + 1) % texts.length;
          return texts[nextIndex];
        });
        setIsVisible(true);
      }, 500); // Tiempo de la animación de salida
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen w-[100%] flex flex-col justify-center items-center gap-8 bg-[url('.././assets/Nebu1.gif')] bg-cover bg-center bg-no-repeat">
      <h2 className="text-4xl font-extrabold text-white text-center">
        Desarrollo Web Personalizado <br /> para
        <span className={`text-blue-500 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}> {dynamicText}</span>
      </h2>
      <p className="text-white text-1xl text-center">
        Potenciamos tu presencia y liderazgo <br/> en el mercado con páginas web hechas a tu
        medida.
      </p>
      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Contactanos</button>
    </section>
  );
}
