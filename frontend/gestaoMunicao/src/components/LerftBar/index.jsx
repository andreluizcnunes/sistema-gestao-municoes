import { CLeftBar } from "./LeftBar.styled";

function LeftBar(){
    return(
        <CLeftBar>
            <a href="/dashboard">Lançamentos</a>
            <a href="/dashboard">Munições</a>
            <a href="/dashboard">Policiais</a>
            <a href="/fornecedor">Fornecedores</a>
            <a href="/dashboard">Usuários</a>
        </CLeftBar>
    );
}

export default LeftBar;