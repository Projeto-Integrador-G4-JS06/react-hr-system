import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/home/Home";

import Cadastro from "./pages/cadastro/Cadastro";
import Sobre from "./pages/sobre/Sobre";
import Carrossel from "./components/carrossel/Carrossel";


function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <div className="scroll-smooth antialiased min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </div>
     </BrowserRouter>
  );
}

export default App;
