import { CMain, ContentMain, CSection } from "./FornecedorCadastro.styled"

import LeftBar from "../../../components/LerftBar";
import TopBar from "../../../components/TopBar";

import HeaderFornecedor from "../PainelFornecedor/components/HeaderFornecedor";
import FormFornecedor from "../PainelFornecedor/components/FormFornecedor";

function PainelFornecedorCadastro(){
    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderFornecedor titulo={"Cadastro de Fornecedor"}/>
                    <FormFornecedor/>
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default PainelFornecedorCadastro;