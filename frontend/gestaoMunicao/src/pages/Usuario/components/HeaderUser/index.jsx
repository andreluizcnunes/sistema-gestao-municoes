import { ContentInfo, ContainerBtn } from "./HeaderUser.styled"

import BtnMenu from "../../../../components/BtnMenu";

import IconAdd from "../../../../assets/icons/iconAdd.png";
import IconBusca from "../../../../assets/icons/iconBusca.png";

function HeaderUser({ titulo }){
    return(
        <ContentInfo>
            <h2>{titulo}</h2>
            <hr />
            <ContainerBtn>
                <BtnMenu linkBotao={"/usuario"} textBotao={"Lista"} />
                <BtnMenu linkBotao={"/usuario/cadastro"} iconBotao={IconAdd} textBotao={"Cadastrar"} />
                <BtnMenu linkBotao={"/usuario/listar"} iconBotao={IconBusca} textBotao={"Consultar"} />
            </ContainerBtn>

        </ContentInfo>
    );
}

export default HeaderUser;