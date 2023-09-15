import { CMain, ContentMain, CSection } from "./UsuarioLista.styled"

import TopBar from "../../../components/TopBar";
import LeftBar from "../../../components/LerftBar"
import HeaderUser from "../PainelUser/components/HeaderUser";
import BuscarUsuario from "../PainelUser/components/BuscarUsuario";

function PainelUserLista(){
    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderUser  titulo={"Pesquisar Usuário"} />
                    <BuscarUsuario/>
                </CSection>
            </ContentMain>
        </CMain>
    );
}


export default PainelUserLista;