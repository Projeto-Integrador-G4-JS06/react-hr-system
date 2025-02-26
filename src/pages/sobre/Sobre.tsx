import Carrossel from "../../components/carrossel/Carrossel";

function Sobre() {
    return (

        <>
            <section className="w-full h-full flex justify-center items-center bg-gray-200 p-10">

                <div className="container mx-auto px-4 flex flex-col  lg:items-center lg:justify-between text-gray-900">
                    <div className="flex lg:flex-row">
                        <div className='text-center lg:w-1/2'>
                            <h2 className='text-5xl font-bold text-[var(--color-aqua-dark)]'>
                                Quem Somos Nós?
                            </h2>

                            <p className=' text-base md:text-xl lg:text-2xl mb-8 text-gray-900 pt-8'>
                                O PeopleHub é uma API escalável para gestão de colaboradores em Recursos Humanos. Permite cadastrar, consultar, atualizar e remover funcionários com segurança, armazenando dados como nome, cargo, salário e admissão. Intuitiva e eficiente, simplifica a administração de dados e otimiza processos de RH.
                            </p>
                        </div>
                        <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-center  ">
                            <img
                                src="https://ik.imagekit.io/22g34n0mo/SVG/imagem_1.svg?updatedAt=1740575541192"
                                alt="Imagem Página Home"
                                className="w-[200px] md:w-[300px] lg:w-[400px]"
                            />
                        </div>
                    </div>

                    <div className="w-full pt-10">
                        <h2 className='text-5xl font-bold text-[var(--color-aqua-dark)]'>Integrantes da Equipe</h2>
                        <Carrossel />
                    </div>

                </div>





            </section >
        </>
    );
}

export default Sobre;