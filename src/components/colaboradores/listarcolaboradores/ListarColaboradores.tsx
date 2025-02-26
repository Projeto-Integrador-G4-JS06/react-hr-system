import CardPrincipal from "../cardcolaborador/CardPrincipal";

function ListarColaboradores() {
  return (
    <div className="p-4 bg-light-gray">
      <div className="flex flex-wrap justify-center gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2"
          >
            <CardPrincipal />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListarColaboradores;
