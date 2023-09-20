import { CMain, ContentMain, CSection } from "./FornecedorLista.styled"

import LeftBar from "../../../components/LerftBar";
import TopBar from "../../../components/TopBar";

import HeaderFornecedor from "../components/HeaderFornecedor";
import FormBuscaFornecedor from "../components/FormBuscaFornecedor";

function PainelFornecedorLista(){

    const handleSubmit = async (e) =>{
        e.preventDefault();
    }

    return(
        <CMain onSubmit={handleSubmit}>
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