import { ContentInfo, ContainerBtn } from "./HeaderUser.styled"

import BtnMenu from "../../../../components/BtnMenu";


function HeaderUser({ titulo }){
    return(
        <ContentInfo>
            <h2>{titulo}</h2>
            <hr />
            <ContainerBtn>
                <BtnMenu linkBotao={"/usuario"} textBotao={"Lista"} />
                <BtnMenu linkBotao={"/usuario/cadastro"} textBotao={"Cadastrar"} />
                <BtnMenu linkBotao={"/usuario/listar"} textBotao={"Consultar"} />
            </ContainerBtn>

        </ContentInfo>
    );
}

export default HeaderUser;