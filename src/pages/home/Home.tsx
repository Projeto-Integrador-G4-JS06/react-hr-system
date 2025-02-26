import { Link } from "react-router-dom";
import "./Home.css";
// Importe os ícones do Phosphor
import { useState } from "react"; // Importe o useState para controlar a visibilidade da senha
import { Eye, EyeSlash } from "@phosphor-icons/react";

function Home() {
  const [mostrarSenha, setMostrarSenha] = useState(false); // Estado para controlar a visibilidade da senha

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha); // Alterna entre mostrar e ocultar a senha
  };

  return (
    <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-2 place-items-center font-bold bg-gradient-to-r from-[#FFFFFF] to-[#969696]">
      {/* Imagem de Fundo (visível apenas em telas grandes) */}
      <div className="fundoHome hidden  lg:inline lg:mt-0 lg:ml-16 lg:w-1/2 xl:w-1/2"></div>
      {/* Formulário */}
      <form className="flex justify-center items-center flex-col w-full md:w-2/3 lg:w-2/3 md:item-star xl:w-1-2 gap-4 p-8 md:p-16 mx-auto">
        <h2 className="text-violet-dark text-3xl md:text-4xl lg:text-5xl text-center ">
          Entrar
        </h2>
        <div className="flex flex-col w-full">
          <label htmlFor="usuario" className="text-gray-900 font-medium">
            Usuário
          </label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="Insira seu E-mail"
            className="placeholder:text-violet-dark placeholder:opacity-50 border-2 border-gray-500 rounded-2xl p-2 bg-white text-gray-800"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="senha" className="text-gray-900 font-medium">
            Senha
          </label>
          <div className="relative">
            <input
              type={mostrarSenha ? "text" : "password"} // Alterna entre "text" e "password"
              id="senha"
              name="senha"
              placeholder="Insira sua senha"
              className="placeholder:text-violet-dark placeholder:opacity-50 border-2 border-gray-500 rounded-2xl p-2 bg-white text-gray-800 w-full pr-10" // Adicione padding à direita para o ícone
            />
            <button
              type="button"
              onClick={toggleMostrarSenha}
              className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
            >
              {mostrarSenha ? (
                <EyeSlash size={20} weight="bold" className="text-gray-800" /> // Ícone de olho fechado
              ) : (
                <Eye size={20} weight="bold" className="text-gray-800" /> // Ícone de olho aberto
              )}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="rounded bg-[var(--color-aqua-medium)] flex justify-center
                         hover:bg-[var(--color-aqua-teste)] text-white w-1/2 py-2  md:w-1/2"
        >
          <span>Entrar</span>
        </button>

        <hr className="border-slate-800 w-full bg-" />

        <div className="">
          <p className="">
              Ainda não tem uma conta?{" "}
            <Link
              to="/cadastro"
              className="0 text-violet-dark hover:text-violet-hover font-bold"
            >
              {" "}
                Cadastre-se   
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Home;
