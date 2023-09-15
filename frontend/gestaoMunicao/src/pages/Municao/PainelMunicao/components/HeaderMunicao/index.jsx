import { ContentInfo, ContainerBtn } from "./HeaderMunicao.styled"

import BtnMenu from "../../../../../components/BtnMenu";

import IconAdd from "../../../../../assets/icons/iconAdd.png";
import IconBusca from "../../../../../assets/icons/iconBusca.png";
import IconHome from "../../../../../assets/icons/iconHome.png";

function HeaderMunicao({ titulo }){
    return(
        <ContentInfo>
            <h2>{titulo}</h2>
            <hr />
            <ContainerBtn>
                <BtnMenu linkBotao={"/municao"} iconBotao={IconHome} textBotao={"Inicio"} />
                <BtnMenu linkBotao={"/municao/cadastro"} iconBotao={IconAdd} textBotao={"Cadastrar"} />
                <BtnMenu linkBotao={"/municao/listar"} iconBotao={IconBusca} textBotao={"Consultar"} />
            </ContainerBtn>

        </ContentInfo>
    );
}

export default HeaderMunicao;