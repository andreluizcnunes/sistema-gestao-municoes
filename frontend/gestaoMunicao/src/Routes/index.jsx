import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard";
import PainelFornecedor from "../pages/PainelFornecedor";

function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/fornecedor' element={<PainelFornecedor/>} />
        </Routes>
    );
}

export default RoutesApp;