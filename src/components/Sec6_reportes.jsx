import reporte from '.././assets/PcReporte.webp';
export function Sec6_Reportes() {
  return (
    <section className='flex justify-between flex-col items-center p-10'>
      <h3 className='text-4xl font-bold text-center'>Generación de reportes y estadistica en <br /> un instante</h3>
      <div className='flex justify-center items-center mt-6'>
        <div className='w-[50%]'>
          <img className='w[]' src={reporte} alt="fotografia de pc con reportes" />
        </div>
        <div className='w-[50%]'>
          <p>
            Ofrecemos soluciones personalizadas que
            permiten a las empresas transformar datos
            complejos en informes claros y visualmente
            atractivos con solo un clic. Ya sea para
            monitorear el rendimiento de su negocio,
            realizar análisis de mercado o evaluar
            indicadores clave.
          </p>
        </div>
      </div>
    </section>
  );
}
