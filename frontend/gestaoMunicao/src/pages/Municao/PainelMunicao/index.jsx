import { useEffect, useState } from "react";

import { CMain, ContentMain, CSection } from "./PainelMunicao.styled";

import TopBar from "../../../components/TopBar";
import LeftBar from "../../../components/LerftBar"
import HeaderMunicao from "../components/HeaderMunicao";

import TabelaMunicao from "../components/TabelaMunicao"

function PainelMunicao(){
    
    const [municoes, setMunicoes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/municao/listaDTO")
        .then(retorno => retorno.json())
        .then(retornoConvertido => setMunicoes(retornoConvertido));
    }, []);
    
    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderMunicao titulo={"Painel Munição"} />
                    <TabelaMunicao vetor={municoes} />
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default PainelMunicao;