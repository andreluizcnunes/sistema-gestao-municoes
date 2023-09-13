import { CMain, ContentInfo, ContentMain, ContainerBtn } from "./PainelFornecedor.styled"

import TopBar from "../../components/TopBar";
import LeftBar from "../../components/LerftBar";
import BtnMenu from "../../components/BtnMenu";

import IconAdd from "../../assets/icons/iconAdd.png";
import IconBusca from "../../assets/icons/iconBusca.png";
function PainelFornecedor(){
    return(
        <CMain>
            <TopBar/>

            <ContentMain>
                <LeftBar/>

                <ContentInfo>
                    <h2>Painel do Fornecedor</h2>
                    <hr />
                    <ContainerBtn>
                        <BtnMenu linkBotao={"/"} iconBotao={IconAdd} textBotao={"Cadastrar"}/>
                        <BtnMenu linkBotao={"/"} iconBotao={IconBusca} textBotao={"Consultar"}/>
                    </ContainerBtn>

                </ContentInfo>
            </ContentMain>
        </CMain>
    );
}

export default PainelFornecedor;