import { ContentInfo, ContainerBtn } from "./HeaderMarca.styled"

import BtnMenu from "../../../../components/BtnMenu";

import IconAdd from "../../../../assets/icons/iconAdd.png";
import IconBusca from "../../../../assets/icons/iconBusca.png";
import IconHome from "../../../../assets/icons/iconHome.png";

function HeaderMarca({ titulo }){
    return(
        <ContentInfo>
            <h2>{titulo}</h2>
            <hr />
            <ContainerBtn>
                <BtnMenu linkBotao={"/marca"} iconBotao={IconHome} textBotao={"Inicio"} />
                <BtnMenu linkBotao={"/marca/cadastro"} iconBotao={IconAdd} textBotao={"Cadastrar"} />
                <BtnMenu linkBotao={"/marca/listar"} iconBotao={IconBusca} textBotao={"Consultar"} />
            </ContainerBtn>

        </ContentInfo>
    );
}

export default HeaderMarca;