import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard";

import PainelFornecedor from "../pages/Fornecedor/PainelFornecedor";
import PainelFornecedorCadastro from "../pages/Fornecedor/PainelFornecedorCadastro";
import PainelFornecedorLista from "../pages/Fornecedor/PainelFornecedorLista";

import PainelMarca from "../pages/Marca/PainelMarca";
import PainelMarcaCadastrar from "../pages/Marca/PainelMarcaCadastrar";
import PainelMarcaLista from "../pages/Marca/PainelMarcaLista";

import PainelMunicao from "../pages/Municao/PainelMunicao";
import PainelMunicaoCadastrar from "../pages/Municao/PainelMunicaoCadastrar";
import PainelMunicaoLista from "../pages/Municao/PainelMunicaoLista";
import PainelMunicaoEditar from "../pages/Municao/PainelMunicaoEditar";

import PainelPolicial from "../pages/Policial/PainelPolicial";
import PainelPolicialCadastro from "../pages/Policial/PainelPolicialCadastro";
import PainelPolicialLista from "../pages/Policial/PainelPolicialLista";
import PainelPolicialEditar from "../pages/Policial/PainelPolicialEditar";

import PainelUser from "../pages/Usuario/PainelUser";
import PainelUserCadastro from "../pages/Usuario/PainelUserCadastro";
import PainelUserEditar from "../pages/Usuario/PainelUserEditar";
import PainelUserLista from "../pages/Usuario/PainelUserLista";

function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/dashboard' element={<Dashboard/>} />

            <Route path='/fornecedor' element={<PainelFornecedor/>} />
            <Route path='/fornecedor/cadastro' element={<PainelFornecedorCadastro/>} />
            <Route path='/fornecedor/listar' element={<PainelFornecedorLista/>} />

            <Route path='/marca' element={<PainelMarca/>} />
            <Route path='/marca/cadastro' element={<PainelMarcaCadastrar/>} />
            <Route path='/marca/listar' element={<PainelMarcaLista/>} />

            <Route path='/municao' element={<PainelMunicao/>} />
            <Route path='/municao/cadastro' element={<PainelMunicaoCadastrar/>} />
            <Route path='/municao/editar' element={<PainelMunicaoEditar/>} />
            <Route path='/municao/listar' element={<PainelMunicaoLista/>} />

            <Route path='/policial' element={<PainelPolicial/>} />
            <Route path='/policial/cadastro' element={<PainelPolicialCadastro/>} />
            <Route path='/policial/editar' element={<PainelPolicialEditar/>} />
            <Route path='/policial/listar' element={<PainelPolicialLista/>} />

            <Route path='/usuario' element={<PainelUser/>} />
            <Route path='/usuario/cadastro' element={<PainelUserCadastro/>} />
            <Route path='/usuario/editar' element={<PainelUserEditar/>} />
            <Route path='/usuario/listar' element={<PainelUserLista/>} />
        </Routes>
    );
}

export default RoutesApp;