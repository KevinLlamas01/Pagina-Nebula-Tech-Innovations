import responsive from '../assets/responsive.png'; 

export function Sec4_Diseño(){
    return (
        <section id='diseño' className='flex justify-evenly items-center mt-20 px-20'>
            <div>
                <h3 className='text-3xl font-bold pb-6 text-center'>Diseño de páginas webs</h3>
                <p className='text-1xl text-center'>Diseñamos tu página web a tu medida, con la cual podras <br /> potenciar tu presencia en el mercado, a demas de generar confianza <br /> a tus clientes, al mantenerte actualizado en tendencias tecnologicas.</p>
            </div>
            <div>
                <img className='w-96' src={responsive} alt="Imagen responsive"/>
            </div>
        </section>
    )
}