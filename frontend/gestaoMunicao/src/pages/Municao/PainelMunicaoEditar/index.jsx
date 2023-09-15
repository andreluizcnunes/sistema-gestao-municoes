import { CMain, ContentMain, CSection } from "./MunicaoEditar.styled"

import TopBar from "../../../components/TopBar";
import LeftBar from "../../../components/LerftBar"
import HeaderMunicao from "../PainelMunicao/components/HeaderMunicao";
import FormMunicao from "../PainelMunicao/components/FormMunicao";

function PainelMunicaoEditar(){
    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderMunicao  titulo={"Editar Munição"} />
                    <FormMunicao/>
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default PainelMunicaoEditar;