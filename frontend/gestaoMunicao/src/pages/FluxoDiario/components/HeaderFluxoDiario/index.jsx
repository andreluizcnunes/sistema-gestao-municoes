import { ContentInfo, ContainerBtn } from "./FluxoDiario.styled"

import BtnMenu from "../../../../components/BtnMenu";

function HeaderFluxoDiario({ titulo }){
    return(
        <ContentInfo>
            <h2>{titulo}</h2>
            <hr />
            <ContainerBtn>
                {/* <BtnMenu linkBotao={"/estoque"} textBotao={"Listagem"} /> */}
                <BtnMenu linkBotao={"/fluxodiario/emprestimo"} textBotao={"Emprestimo"} />
                <BtnMenu linkBotao={"/fluxodiario/devolucao"} textBotao={"Devolução"} />
            </ContainerBtn>

        </ContentInfo>
    );
}

export default HeaderFluxoDiario;