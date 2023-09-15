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
import PainelMarcaLista from "../pages/PainelMarcaLista";
import PainelMunicao from "../pages/PainelMunicao";
import PainelMunicaoCadastrar from "../pages/PainelMunicaoCadastrar";
import PainelMunicaoLista from "../pages/PainelMunicaoLista";
import PainelMunicaoEditar from "../pages/PainelMunicaoEditar";
import PainelPolicial from "../pages/PainelPolicial";
import PainelPolicialCadastro from "../pages/PainelPolicialCadastro";
import PainelPolicialLista from "../pages/PainelPolicialLista";
import PainelPolicialEditar from "../pages/PainelPolicialEditar";

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