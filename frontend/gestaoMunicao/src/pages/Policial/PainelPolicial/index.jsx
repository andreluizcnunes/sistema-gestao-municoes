import { CMain, ContentMain, CSection } from "./Policial.styled"

import TopBar from "../../../components/TopBar";
import LeftBar from "../../../components/LerftBar";
import HeaderPolicial from "../components/HeaderPolicial"
import { useEffect, useState } from "react";

import TabelaPolicial from "../components/TabelaPolicial";

function PainelPolicial(){

    const [policiais, setPoliciais] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/policial/listarDTO")
          .then(retorno => retorno.json())
          .then(retornoConvertido => setPoliciais(retornoConvertido));
    }, []);


    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderPolicial titulo={"Painel Policial"} />
                    <TabelaPolicial
                        vetor={policiais}
                    />
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default PainelPolicial;