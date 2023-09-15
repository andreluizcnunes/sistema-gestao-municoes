import { CMain, ContentMain } from "./PainelFornecedor.styled"

import TopBar from "../../../components/TopBar";
import LeftBar from "../../../components/LerftBar";
import HeaderFornecedor from "./components/HeaderFornecedor";

function PainelFornecedor(){
    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <HeaderFornecedor titulo={"Painel Fornecedor"}/>
            </ContentMain>
        </CMain>
    );
}

export default PainelFornecedor;