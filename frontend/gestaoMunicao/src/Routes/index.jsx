import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard";

import PainelFornecedor from "../pages/Fornecedor/PainelFornecedor";
import PainelFornecedorCadastro from "../pages/Fornecedor/PainelFornecedorCadastro";
import PainelFornecedorLista from "../pages/Fornecedor/PainelFornecedorLista";
import PainelFornecedorEditar from "../pages/Fornecedor/PainelFornecedorEditar";

import PainelMarca from "../pages/Marca/PainelMarca";
import PainelMarcaCadastrar from "../pages/Marca/PainelMarcaCadastrar";
import PainelMarcaEditar from "../pages/Marca/PainelMarcaEditar";
import PainelMarcaLista from "../pages/Marca/PainelMarcaLista";

import PainelMunicao from "../pages/Municao/PainelMunicao";
import PainelMunicaoCadastrar from "../pages/Municao/PainelMunicaoCadastrar";
import PainelMunicaoLista from "../pages/Municao/PainelMunicaoLista";
import PainelMunicaoEditar from "../pages/Municao/PainelMunicaoEditar";

import PainelPolicial from "../pages/Policial/PainelPolicial";
import PainelPolicialCadastro from "../pages/Policial/PainelPolicialCadastro";
import PainelPolicialLista from "../pages/Policial/PainelPolicialLista";
import PainelPolicialEditar from "../pages/Policial/PainelPolicialEditar";

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
            <Route path='/marca/listar' element={<PainelMarcaLista/>} />

            <Route path='/municao' element={<PainelMunicao/>} />
            <Route path='/municao/cadastro' element={<PainelMunicaoCadastrar/>} />
            <Route path='/municao/editar' element={<PainelMunicaoEditar/>} />
            <Route path='/municao/listar' element={<PainelMunicaoLista/>} />

            <Route path='/policial' element={<PainelPolicial/>} />
            <Route path='/policial/cadastro' element={<PainelPolicialCadastro/>} />
            <Route path='/policial/editar' element={<PainelPolicialEditar/>} />
            <Route path='/policial/listar' element={<PainelPolicialLista/>} />
        </Routes>
    );
}

export default RoutesApp;