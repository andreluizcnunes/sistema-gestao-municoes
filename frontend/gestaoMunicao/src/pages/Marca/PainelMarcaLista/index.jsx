import { CMain, ContentMain, CSection } from "./MarcaLista.styled"

import TopBar from "../../../components/TopBar";
import LeftBar from "../../../components/LerftBar"
import HeaderMarca from "../PainelMarca/components/HeaderMarca";
import FormBuscaMarca from "../PainelMarca/components/FormBuscaMarca";

function PainelMarcaLista(){
    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderMarca  titulo={"Pesquisar Marca"} />
                    <FormBuscaMarca/>
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default PainelMarcaLista;