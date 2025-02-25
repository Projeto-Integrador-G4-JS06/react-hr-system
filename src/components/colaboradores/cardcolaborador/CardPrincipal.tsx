

function CardPrincipal() {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden justify-between shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-[var(--color-soft-white)] w-[13.5rem] h-[19.25rem] max-w-xs mx-auto transform hover:-translate-y-1">
      <div className="flex flex-col justify-center w-[13.43rem] h-[13.25rem] items-center bg-aqua-medium">
          <img
            src="https://ik.imagekit.io/3ov0fr7b9/usuarios/07.jpg?updatedAt=1737393242068" // Usando a função getImagemSrc
            className="rounded-full w-[6.81rem] h-[6.62rem] "
            alt="foto do colaborador"
          />
          <p className="text-light-gray text-base mt-1">Nome Sobrenome</p>
        </div>
         <div className="flex flex-col items-start p-4 ">
            <p className="text-base font-semibold -mt-2">
            Analista de Dados
            </p>
             <p className="text-xs mb-2">
                nome@email.com
            </p>
            <button
            className="bg-aqua-medium rounded-3xl hover:bg-aqua-dark cursor-pointer  text-light-gray  p-1 px-4 mt-3 items-start text-xs">
                Detalhes
                </button>
         </div>
     

    </div>
  );
}

export default CardPrincipal