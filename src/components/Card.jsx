export function Card({Nombre, Detalle, Url}) {
  return (
    <div className='bg-[#183366] p-3 h-[300px] w-60 rounded-3xl flex flex-col justify-around items-center text-center'>
        <img className='w-[150px]' src={Url} alt={Nombre} />
        <div className='text-white'>
            <h3 className="text-xl text-">{Nombre}</h3>
            <p className="text-[13px]">{Detalle}</p>
        </div>
    </div>
  );
}


