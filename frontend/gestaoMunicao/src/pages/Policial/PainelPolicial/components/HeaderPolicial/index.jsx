import { ContentInfo, ContainerBtn } from "./HeaderPolicial.styled"

import BtnMenu from "../../../../../components/BtnMenu";

import IconAdd from "../../../../../assets/icons/iconAdd.png";
import IconBusca from "../../../../../assets/icons/iconBusca.png";
import IconHome from "../../../../../assets/icons/iconHome.png";

function HeaderPolicial({ titulo }){
    return(
        <ContentInfo>
            <h2>{titulo}</h2>
            <hr />
            <ContainerBtn>
                <BtnMenu linkBotao={"/policial"} iconBotao={IconHome} textBotao={"Inicio"} />
                <BtnMenu linkBotao={"/policial/cadastro"} iconBotao={IconAdd} textBotao={"Cadastrar"} />
                <BtnMenu linkBotao={"/policial/listar"} iconBotao={IconBusca} textBotao={"Consultar"} />
            </ContainerBtn>

        </ContentInfo>
    );
}

export default HeaderPolicial;