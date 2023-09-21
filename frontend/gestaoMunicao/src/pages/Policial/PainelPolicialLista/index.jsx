import { CMain, ContentMain, CSection } from "./PolicialEditar.styled"

import TopBar from "../../../components/TopBar";
import LeftBar from "../../../components/LerftBar"
import HeaderPolicial from "../components/HeaderPolicial";
import BuscarPolicial from "../components/BuscarPolicial";

function PainelPolicialLista(){

    const handleSubmit = async (e) =>{
        e.preventDefault();
    }

    return(
        <CMain onSubmit={handleSubmit}>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderPolicial  titulo={"Pesquisar Policial"} />
                    <BuscarPolicial/>
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default PainelPolicialLista;