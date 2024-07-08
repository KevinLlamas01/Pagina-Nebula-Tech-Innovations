import reporte from '.././assets/reportes.png';
export function Sec6_Reportes() {
  return (
    <section id='reportes' className='flex justify-evenly items-center mt-20 px-20'>
        <div>
          <img className='w-80 rounded-full' src={reporte} alt="Fotografia de pc con reportes" />
        </div>
        <div>
          <h3 className='text-3xl font-bold pb-6 text-center'>Generación de reportes y estadistica en <br /> un instante</h3>
          <p className='text-1xl text-center'>
            Ofrecemos soluciones personalizadas que permiten a las <br /> 
            empresas transformar datos complejos en informes claros <br /> 
            y visualmente atractivos con solo un clic. <br /> <br />
            Ya sea para monitorear el rendimiento de su negocio, <br /> 
            realizar análisis de mercado o evaluar indicadores clave.
          </p>
        </div>
    </section>
  );
}
