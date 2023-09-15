import { CMain, ContentMain, CSection } from "./UserCadastro.styled"


import TopBar from "../../../components/TopBar";
import LeftBar from "../../../components/LerftBar"
import HeaderUser from "../PainelUser/components/HeaderUser";
import FormUsuario from "../PainelUser/components/FormUsuario";

function PainelUserCadastro(){
    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderUser  titulo={"Cadastrar Usuário"} />
                    <FormUsuario/>
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default PainelUserCadastro;