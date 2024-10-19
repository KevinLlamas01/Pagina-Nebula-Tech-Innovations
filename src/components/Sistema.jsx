export function Sistema({ Nombre, Url }) {
    return (
        <div className="relative h-[15rem] lg:h-[15rem] md:h-[15rem] w-[100%] flex flex-col justify-center items-center gap-8 hover:scale-[101%] hover:translate-y-[-9px] transition border border-gray shadow-lg">
            <div style={{ backgroundImage: `url(${Url})` }} className="absolute inset-0 bg-cover bg-no-repeat opacity-70 z-0"></div>
            <div className="relative z-10 text-center text-white">
                <h1 className="text-2xl bg-black bg-opacity-40 p-2 rounded">{Nombre}</h1>
                <a href="#" className="hover:underline bg-black bg-opacity-40 px-4 pb-2 rounded-b">Ver detalles</a>
            </div>
        </div>
    );
}