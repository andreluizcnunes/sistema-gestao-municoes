import { CMain, ContentMain } from "./FornecedorCadastro.styled"

import LeftBar from "../../components/LerftBar";
import TopBar from "../../components/TopBar";

import HeaderFornecedor from "../PainelFornecedor/components/HeaderFornecedor";

function PainelFornecedorCadastro(){
    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <HeaderFornecedor titulo={"Cadastro de Fornecedor"}/>
            </ContentMain>
        </CMain>
    );
}

export default PainelFornecedorCadastro;