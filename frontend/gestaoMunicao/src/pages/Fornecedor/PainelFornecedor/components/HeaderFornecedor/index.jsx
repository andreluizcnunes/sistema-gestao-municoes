import { ContentInfo, ContainerBtn} from "./HeaderFornecedor.styled"

import BtnMenu from "../../../../../components/BtnMenu";

import IconAdd from "../../../../../assets/icons/iconAdd.png";
import IconBusca from "../../../../../assets/icons/iconBusca.png";
import IconHome from "../../../../../assets/icons/iconHome.png";

function HeaderFornecedor({ titulo }) {
    return (
        <ContentInfo>
            <h2>{titulo}</h2>
            <hr />
            <ContainerBtn>
                <BtnMenu linkBotao={"/fornecedor"} iconBotao={IconHome} textBotao={"Inicio"} />
                <BtnMenu linkBotao={"/fornecedor/cadastro"} iconBotao={IconAdd} textBotao={"Cadastrar"} />
                <BtnMenu linkBotao={"/fornecedor/listar"} iconBotao={IconBusca} textBotao={"Consultar"} />
            </ContainerBtn>

        </ContentInfo>
    );
}

export default HeaderFornecedor;