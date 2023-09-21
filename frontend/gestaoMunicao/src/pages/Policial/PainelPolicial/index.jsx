import { CMain, ContentMain, CSection } from "./Policial.styled"

import TopBar from "../../../components/TopBar";
import LeftBar from "../../../components/LerftBar";
import HeaderPolicial from "../components/HeaderPolicial"
import TabelaPolicial from "../components/TabelaPolicial";
import { useEffect, useState } from "react";

function PainelPolicial(){

    const [policiais, setPoliciais] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/policial/lista")
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