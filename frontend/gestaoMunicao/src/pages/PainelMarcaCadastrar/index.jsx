import { CMain, ContentMain, CSection } from "./MarcaCadastro.styled"

import TopBar from "../../components/TopBar";
import LeftBar from "../../components/LerftBar"
import HeaderMarca from "../PainelMarca/components/HeaderMarca";
import FormMarca from "../PainelMarca/components/FormMarca";

function PainelMarcaCadastrar(){
    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderMarca  titulo={"Cadastrar Marca"} />
                    <FormMarca/>
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default PainelMarcaCadastrar;