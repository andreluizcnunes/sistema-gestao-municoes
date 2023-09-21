import { CMain, ContentMain, CSection } from "./PolicialEditar.styled"

import TopBar from "../../../components/TopBar";
import LeftBar from "../../../components/LerftBar"
import HeaderPolicial from "../components/HeaderPolicial";
import BuscarPolicial from "../components/BuscarPolicial";

function PainelPolicialLista(){
    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderPolicial  titulo={"Pesquisar Policial"} />
                    <BuscarPolicial/>
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default PainelPolicialLista;