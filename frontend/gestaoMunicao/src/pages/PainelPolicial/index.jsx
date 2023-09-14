import { CMain, ContentMain } from "./Policial.styled"

import TopBar from "../../components/TopBar";
import LeftBar from "../../components/LerftBar";
import HeaderPolicial from "./components/HeaderPolicial"

function PainelPolicial(){
    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <HeaderPolicial titulo={"Painel Policial"} />
            </ContentMain>
        </CMain>
    );
}

export default PainelPolicial;