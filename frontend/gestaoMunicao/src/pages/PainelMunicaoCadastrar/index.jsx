import { CMain, ContentMain, CSection } from "./MunicaoCadastrar.styled"

import TopBar from "../../components/TopBar";
import LeftBar from "../../components/LerftBar"
import HeaderMunicao from "../PainelMunicao/components/HeaderMunicao";
import FormMunicao from "../PainelMunicao/components/FormMunicao";

function PainelMunicaoCadastrar(){
    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderMunicao  titulo={"Cadastrar Munição"} />
                    <FormMunicao/>
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default PainelMunicaoCadastrar;