import { CMain, ContentMain, CSection } from "./PainelLancamento.styled";

import TopBar from "../../../components/TopBar";
import LeftBar from "../../../components/LerftBar";

import HeaderEstoque from "../components/HeaderEstoque"

function PainelEstoque(){
    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderEstoque  titulo={"Painel Estoque"} />
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default PainelEstoque;