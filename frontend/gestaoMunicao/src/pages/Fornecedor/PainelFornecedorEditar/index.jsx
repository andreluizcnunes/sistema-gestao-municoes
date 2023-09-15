import { CMain, ContentMain, CSection } from "./FornecedorEditar.styled"

import LeftBar from "../../../components/LerftBar";
import TopBar from "../../../components/TopBar";

import HeaderFornecedor from "../PainelFornecedor/components/HeaderFornecedor";
import FormFornecedor from "../PainelFornecedor/components/FormFornecedor";

function PainelFornecedorEditar(){
    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderFornecedor titulo={"Editar Fornecedor"}/>
                    <FormFornecedor/>
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default PainelFornecedorEditar;