import { CMain, ContentMain } from "./FornecedorLista.styled"

import LeftBar from "../../components/LerftBar";
import TopBar from "../../components/TopBar";

import HeaderFornecedor from "../PainelFornecedor/components/HeaderFornecedor";

function PainelFornecedorLista(){
    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <HeaderFornecedor titulo={"Consultar Fornecedor"}/>
            </ContentMain>
        </CMain>
    );
}

export default PainelFornecedorLista;