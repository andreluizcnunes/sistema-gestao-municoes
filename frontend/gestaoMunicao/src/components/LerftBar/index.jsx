import { CLeftBar } from "./LeftBar.styled";

function LeftBar(){
    return(
        <CLeftBar>
            <a href="/dashboard">Inicio</a>
            <a href="/dashboard">Lançamentos</a>
            <a href="/municao">Munições</a>
            <a href="/policial">Policiais</a>
            <a href="/fornecedor">Fornecedores</a>
            <a href="/marca">Marca</a>
            <a href="/usuario">Usuários</a>
        </CLeftBar>
    );
}

export default LeftBar;