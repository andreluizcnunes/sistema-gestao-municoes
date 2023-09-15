import { CMain, ContentMain, CSection } from "./UserEditar.styled"

import TopBar from "../../../components/TopBar";
import LeftBar from "../../../components/LerftBar"
import HeaderUser from "../PainelUser/components/HeaderUser";
import FormUsuario from "../PainelUser/components/FormUsuario";

function PainelUserEditar(){
    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderUser  titulo={"Editar Usuário"} />
                    <FormUsuario/>
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default PainelUserEditar;