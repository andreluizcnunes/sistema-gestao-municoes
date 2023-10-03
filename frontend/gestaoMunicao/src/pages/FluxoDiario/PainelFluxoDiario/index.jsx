import { CMain, ContentMain, CSection } from "./PainelFluxoDiario.styled";

import TopBar from "../../../components/TopBar";
import LeftBar from "../../../components/LerftBar";

import HeaderFluxoDiario from "../components/HeaderFluxoDiario"

function PainelFluxoDiario(){
    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderFluxoDiario  titulo={"Fluxo Diário"} />
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default PainelFluxoDiario;