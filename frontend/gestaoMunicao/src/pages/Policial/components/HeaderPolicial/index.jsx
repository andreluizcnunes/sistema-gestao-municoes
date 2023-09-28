import { ContentInfo, ContainerBtn } from "./HeaderPolicial.styled"

import BtnMenu from "../../../../components/BtnMenu";


function HeaderPolicial({ titulo }){
    return(
        <ContentInfo>
            <h2>{titulo}</h2>
            <hr />
            <ContainerBtn>
                <BtnMenu linkBotao={"/policial"} textBotao={"Inicio"} />
                <BtnMenu linkBotao={"/policial/cadastro"}  textBotao={"Cadastrar"} />
                <BtnMenu linkBotao={"/policial/listar"} textBotao={"Consultar"} />
            </ContainerBtn>

        </ContentInfo>
    );
}

export default HeaderPolicial;