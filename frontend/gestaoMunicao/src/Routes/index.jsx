import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login"

function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={<Login/>} />
        </Routes>
    );
}

export default RoutesApp;