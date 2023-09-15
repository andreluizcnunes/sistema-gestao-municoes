import { CMain, ContentMain, CSection } from "./PolicialEditar"

import TopBar from "../../components/TopBar";
import LeftBar from "../../components/LerftBar"
import HeaderPolicial from "../PainelPolicial/components/HeaderPolicial";
import FormPolicial from "../PainelPolicial/components/FormPolicial";

function PainelPolicialEditar(){
    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderPolicial  titulo={"Editar Policial"} />
                    <FormPolicial/>
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default PainelPolicialEditar;