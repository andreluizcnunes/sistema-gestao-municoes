import { CMain, ContentMain, CSection } from "./UsuarioLista.styled"

import TopBar from "../../../components/TopBar";
import LeftBar from "../../../components/LerftBar"
import HeaderUser from "../components/HeaderUser";
import BuscarUsuario from "../components/BuscarUsuario";

function PainelUserLista(){

    const handleSubmit = async (e) =>{
        e.preventDefault();
    }


    return(
        <CMain onSubmit={handleSubmit}>
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