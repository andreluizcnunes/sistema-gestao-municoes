import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard";
import PainelFornecedor from "../pages/PainelFornecedor";
import PainelFornecedorCadastro from "../pages/PainelFornecedorCadastro";
import PainelFornecedorLista from "../pages/PainelFornecedorLista";
import PainelFornecedorEditar from "../pages/PainelFornecedorEditar";
import PainelMarca from "../pages/PainelMarca";
import PainelMarcaCadastrar from "../pages/PainelMarcaCadastrar";
import PainelMarcaEditar from "../pages/PainelMarcaEditar";

function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/dashboard' element={<Dashboard/>} />

            <Route path='/fornecedor' element={<PainelFornecedor/>} />
            <Route path='/fornecedor/cadastro' element={<PainelFornecedorCadastro/>} />
            <Route path='/fornecedor/editar' element={<PainelFornecedorEditar/>} />
            <Route path='/fornecedor/listar' element={<PainelFornecedorLista/>} />

            <Route path='/marca' element={<PainelMarca/>} />
            <Route path='/marca/cadastro' element={<PainelMarcaCadastrar/>} />
            <Route path='/marca/editar' element={<PainelMarcaEditar/>} />
        </Routes>
    );
}

export default RoutesApp;