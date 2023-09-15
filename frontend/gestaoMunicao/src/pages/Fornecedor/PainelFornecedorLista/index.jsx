import { CMain, ContentMain, CSection } from "./FornecedorLista.styled"

import LeftBar from "../../../components/LerftBar";
import TopBar from "../../../components/TopBar";

import HeaderFornecedor from "../PainelFornecedor/components/HeaderFornecedor";
import FormBuscaFornecedor from "../PainelFornecedor/components/FormBuscaFornecedor";

function PainelFornecedorLista(){
    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderFornecedor titulo={"Pesquisa de Fornecedor"}/>
                    <FormBuscaFornecedor/>
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default PainelFornecedorLista;