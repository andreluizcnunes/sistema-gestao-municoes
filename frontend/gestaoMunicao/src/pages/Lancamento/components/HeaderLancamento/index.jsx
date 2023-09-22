import { ContentInfo, ContainerBtn } from "./HeaderLancamento.styled"

import BtnMenu from "../../../../components/BtnMenu";

import IconAdd from "../../../../assets/icons/iconAdd.png";
import IconBusca from "../../../../assets/icons/iconBusca.png";
import IconHome from "../../../../assets/icons/iconHome.png";

function HeaderLancamento({ titulo }){
    return(
        <ContentInfo>
            <h2>{titulo}</h2>
            <hr />
            <ContainerBtn>
                <BtnMenu linkBotao={"/lancamento"} iconBotao={IconHome} textBotao={"Inicio"} />
                <BtnMenu linkBotao={"/lancamento/cadastro"} iconBotao={IconAdd} textBotao={"Cadastrar"} />
                <BtnMenu linkBotao={"/lancamento/listar"} iconBotao={IconBusca} textBotao={"Consultar"} />
            </ContainerBtn>

        </ContentInfo>
    );
}

export default HeaderLancamento;