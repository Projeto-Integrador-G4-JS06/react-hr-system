function CardSecundario() {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden justify-between shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-[var(--color-soft-white)] w-[13.5rem] h-[19.25rem] max-w-xs mx-auto transform hover:-translate-y-1">
      <div className="flex text-white justify-center w-[13.50rem] h-[3.2rem] min-h-[2rem] items-center bg-[#6F5D80] p-5">
        Nome Sobrenome
      </div>
      <div className="m-3 ml-4">
        <p className="font-semibold ">CPF</p>
        <div className="list-disc  ml-2 mb-1.5">
          <li>46413215478</li>
        </div>

        <p className="font-semibold ">Salário</p>
        <div className="list-disc  ml-2 mb-1.5">
          <li>R$3582.20</li>
        </div>
        <p className="font-semibold ">Data de Aniversário</p>
        <div className="list-disc  ml-2 mb-1.5">
          <li>31/05/1998</li>
        </div>
        <p className="font-semibold ">Data da Contratação</p>
        <div className="list-disc  ml-2 mb-1">
          <li>31/05/1998</li>
        </div>
      </div>
    </div>
  );
}

export default CardSecundario;
