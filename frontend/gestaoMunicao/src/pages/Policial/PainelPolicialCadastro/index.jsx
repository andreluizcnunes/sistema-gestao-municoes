import { CMain, ContentMain, CSection } from "./PolicialCadastrar.styled"

import TopBar from "../../../components/TopBar";
import LeftBar from "../../../components/LerftBar"
import HeaderPolicial from "../PainelPolicial/components/HeaderPolicial";
import FormPolicial from "../PainelPolicial/components/FormPolicial";

function PainelPolicialCadastro(){
    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderPolicial  titulo={"Cadastrar Policial"} />
                    <FormPolicial/>
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default PainelPolicialCadastro;