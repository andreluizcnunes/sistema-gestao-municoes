import { ContentInfo, ContainerBtn } from "./HeaderLancamento.styled"

import BtnMenu from "../../../../components/BtnMenu";

function HeaderEstoque({ titulo }){
    return(
        <ContentInfo>
            <h2>{titulo}</h2>
            <hr />
            <ContainerBtn>
                {/* <BtnMenu linkBotao={"/estoque"} textBotao={"Listagem"} /> */}
                <BtnMenu linkBotao={"/estoque/entrada"} textBotao={"Entrada Estoque"} />
                <BtnMenu linkBotao={"/estoque/saida"} textBotao={"Saida Estoque"} />
            </ContainerBtn>

        </ContentInfo>
    );
}

export default HeaderEstoque;