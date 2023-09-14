import { CMain, ContentMain, CSection } from "./MarcaEditar.styled"

import TopBar from "../../components/TopBar";
import LeftBar from "../../components/LerftBar"
import HeaderMarca from "../PainelMarca/components/HeaderMarca";
import FormMarca from "../PainelMarca/components/FormMarca";

function PainelMarcaEditar(){
    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderMarca  titulo={"Editar Marca"} />
                    <FormMarca/>
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default PainelMarcaEditar;