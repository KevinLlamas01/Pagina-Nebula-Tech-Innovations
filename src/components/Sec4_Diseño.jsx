import responsive from '../assets/Responsive.webp'; 

export function Sec4_Diseño(){
    return (
        <section className='flex justify-center items-center p-10'>
            <div className='w-[50%]'>
                <h3 className='text-4xl font-bold mb-6'>Diseño de páginas <br/> webs</h3>
                <p className='text-1xl'>Diseñamos tu página web a tu medida, con la cual podras potenciar tu precensia en el mercado, aemas de generar confianza a tus clientes, al mantenerte actualizado en tendencias tecnologicas.</p>
            </div>
            <div className='w-[50%] flex justify-center items-center'>
                 <img className='w-[50%]' src={responsive} alt="Imagen responsive"/>
            </div>
        </section>
    )
}