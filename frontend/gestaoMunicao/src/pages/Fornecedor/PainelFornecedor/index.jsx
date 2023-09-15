import { CMain, ContentMain, CSection } from "./PainelFornecedor.styled"

import TopBar from "../../../components/TopBar";
import LeftBar from "../../../components/LerftBar";
import HeaderFornecedor from "./components/HeaderFornecedor";
import TabelaFonecedor from "./components/TabelaFornecedor";
import { useEffect, useState } from "react";

function PainelFornecedor(){

    const [fornecedores, setFornecedores] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/fornecedor/lista")
          .then(retorno => retorno.json())
          .then(retornoConvertido => setFornecedores(retornoConvertido));
    }, []);

    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderFornecedor titulo={"Painel Fornecedor"}/>
                    <TabelaFonecedor
                        vetor={fornecedores}
                    />
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default PainelFornecedor;