import { CMain, ContentMain, CSection } from "./MunicaoLista.styled"

import TopBar from "../../../components/TopBar";
import LeftBar from "../../../components/LerftBar"
import HeaderMunicao from "../components/HeaderMunicao";
import FormBuscaMunicao from "../components/FormBuscaMunicao";

function PainelMunicaoLista(){
    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderMunicao  titulo={"Pesquisar Munição"} />
                    <FormBuscaMunicao/>
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default PainelMunicaoLista;