import { CMain, ContentMain } from "./User.styled"

import TopBar from "../../../components/TopBar";
import LeftBar from "../../../components/LerftBar";
import HeaderUser from "./components/HeaderUser"

function PainelUser(){
    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <HeaderUser titulo={"Painel Usuário"} />
            </ContentMain>
        </CMain>
    );
}

export default PainelUser;