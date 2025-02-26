function TopSobre() {
    return (
        <>
            <div className=" flex justify-center bg-[var(--color-light-gray)]">
                <div className='container grid grid-cols-2  text-white'>
                    <div className="flex flex-col  gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold text-[var(--color-aqua-dark)]'>
                            Quem somos nós,
                        </h2>
                        <p className='text-xl text-center text-black font-[var(--font--montserrat)]'>
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

                    <div className="flex justify-center  ">
                        <img
                            src="https://ik.imagekit.io/22g34n0mo/SVG/imagem_1.svg?updatedAt=1740575541192"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopSobre