import { CMain, ContentMain, CSection } from "./PainelLancamento.styled";

import TopBar from "../../../components/TopBar";
import LeftBar from "../../../components/LerftBar";

import HeaderLancamento from "../components/HeaderLancamento"

function PainelLancamento(){
    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderLancamento  titulo={"Painel Lançamento"} />
                    <h1>Teste</h1>
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default PainelLancamento;