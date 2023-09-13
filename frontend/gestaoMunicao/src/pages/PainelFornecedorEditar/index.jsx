import { CMain, ContentMain } from "./FornecedorEditar.styled"

import LeftBar from "../../components/LerftBar";
import TopBar from "../../components/TopBar";

import HeaderFornecedor from "../PainelFornecedor/components/HeaderFornecedor";

function PainelFornecedorEditar(){
    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <HeaderFornecedor titulo={"Editar Fornecedor"}/>
            </ContentMain>
        </CMain>
    );
}

export default PainelFornecedorEditar;