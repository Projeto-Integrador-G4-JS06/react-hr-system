import { useState } from "react";
import { MagnifyingGlass, User, List } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Importação do Framer Motion

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="relative bg-dark-slate text-white w-full">
            {/* Navbar Responsiva (Mobile) */}
            <div className="container mx-auto px-4 w-full flex items-center justify-between pt-6 pb-1 xl:hidden">
                {/* Ícone do menu hambúrguer (com efeito de rotação) */}
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    <div className="border border-gray-200 rounded-sm p-1">
                        <motion.div
                            animate={{ rotate: menuOpen ? 90 : 0 }} // Rotação ao abrir/fechar
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <List size={29} />
                        </motion.div>
                    </div>
                </button>

                {/* Logo (Centralizada no Mobile) */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
                    <Link to="/home">
                        <img
                            className="h-[4vh]"
                            src="https://ik.imagekit.io/czhooyc3x/PeopleHub%20-%20Frontend/Logo_PeopleHub.svg?updatedAt=1740511222577"
                            alt="PeopleHub Logo"
                        />
                    </Link>
                </div>
            </div>

            {/* Barra de pesquisa (reduzida no Mobile) */}
            <div className="container mx-auto px-4 py-4 xl:hidden">
                <div className="flex items-center bg-white rounded-xl ">
                    <input
                        type="text"
                        placeholder="O que deseja buscar?"
                        className="w-full text-gray-800 py-1.5 px-2 text-sm"
                    />
                    <MagnifyingGlass size={24} className="text-gray-600 mr-2" />
                </div>
            </div>

            {/* Menu Mobile com animação */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        initial={{ y: -50, opacity: 0 }} // Começa invisível e acima
                        animate={{ y: 0, opacity: 1 }} // Anima para posição normal
                        exit={{ y: -50, opacity: 0 }} // Sai suavemente
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="container mx-auto px-2 absolute top-[70px] left-0 w-5/6 bg-slate-900 text-white py-2 xl:hidden shadow-lg"
                    >
                        <ul className="flex flex-col items-start px-4">
                            <li className="w-full py-3 border-b border-gray-400">
                                <Link to="/home" className="hover:underline">
                                    Login
                                </Link>
                            </li>
                            <li className="w-full py-3 border-b border-gray-400">
                                <Link
                                    to="/listarcolaboradores"
                                    className="hover:underline"
                                >
                                    Colaboradores
                                </Link>
                            </li>
                            <li className="w-full py-3 ">
                                <Link to="/sobre" className="hover:underline">
                                    Sobre
                                </Link>
                            </li>
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>

            {/* Navbar Completa para Desktop */}
            <div className="container mx-auto px-8 hidden xl:flex items-center justify-between py-8">
                {/* Logo e Nome (lado esquerdo) */}
                <div className="w-1/4 flex items-center">
                    <Link to="/home">
                        <img
                            className="h-[7vh]"
                            src="https://ik.imagekit.io/czhooyc3x/PeopleHub%20-%20Frontend/Logo_PeopleHub.svg?updatedAt=1740511222577"
                            alt="PeopleHub Logo"
                        />
                    </Link>
                    <Link to="/home">
                        <p className="font-bold text-3xl mx-3"></p>
                    </Link>
                </div>

                {/* Barra de Pesquisa */}
                <div className="w-1/3 flex items-center justify-between">
                    <input
                        type="text"
                        placeholder="O que deseja buscar?"
                        className="rounded-lg bg-white w-full text-gray-800 py-3 px-3 text-xl"
                    />

                    <div className="ml-4 border border-aqua-medium rounded-sm p-1.5 bg-aqua-medium">
                        <MagnifyingGlass size={28} className="p-1" />
                    </div>
                </div>

                {/* Ícones de Usuário e Carrinho */}

                {/* Opções de Navegação */}
                <nav className="w-1/4">
                    <ul className="flex text-2xl justify-around ">
                        <li className="mr-20 hover:text-gray-400 cursor-pointer">
                        <Link to="/listarcolaboradores" className="hover:underline">
                        Colaboradores
                            </Link>
                            
                        </li>
                        <li className="mr-20 hover:text-gray-400 cursor-pointer">
                            <Link to="/sobre" className="hover:underline">
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" className="hover:underline">
                                <User size={31} />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
