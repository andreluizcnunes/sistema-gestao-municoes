import { CMain, ContentMain } from "./Marca.styled"

import TopBar from "../../components/TopBar";
import LeftBar from "../../components/LerftBar"
import HeaderMarca from "./components/HeaderMarca";

function PainelMarca(){
    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <HeaderMarca  titulo={"Painel Marca"} />
            </ContentMain>
        </CMain>
    );
}

export default PainelMarca;