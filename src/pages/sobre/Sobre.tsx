

function Sobre() {
    return (

        <>
            <section className="w-full h-screen flex justify-center items-center bg-gray-200">

                <div className="container mx-auto px-4 flex flex-col lg:flex-row lg:items-center lg:justify-between text-gray-900">
                    <div className='text-center lg:w-1/2'>
                        <h2 className='text-5xl font-bold text-[var(--color-aqua-dark)]'>
                            Quem Somos Nós?
                        </h2>

                        <p className=' text-base md:text-xl lg:text-2xl mb-8 text-gray-900 pt-8'>
                            Esta API oferece uma solução eficiente para gerenciar informações de colaboradores em
                            um sistema de RH, utilizando TypeORM para a integração com um banco de dados MySQL.
                            Suas principais funcionalidades incluem: cadastro de novos colaboradores com dados
                            detalhados como nome, cargo, salário e data de admissão; consulta de informações,
                            permitindo listar todos os colaboradores ou visualizar detalhes de um específico;
                            atualização de dados de colaboradores existentes; e remoção segura de colaboradores do sistema.
                            A API foi projetada para ser simples e escalável, facilitando a gestão e a persistência dos
                            dados de forma eficaz.
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

            </section >
        </>
    );
}

export default Sobre;