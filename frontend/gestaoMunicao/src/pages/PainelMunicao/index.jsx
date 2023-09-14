import { CMain, ContentMain } from "./PainelMunicao.styled"

import TopBar from "../../components/TopBar";
import LeftBar from "../../components/LerftBar"
import HeaderMunicao from "./components/HeaderMunicao";

function PainelMunicao(){
    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <HeaderMunicao titulo={"Painel Munição"} />
            </ContentMain>
        </CMain>
    );
}

export default PainelMunicao;