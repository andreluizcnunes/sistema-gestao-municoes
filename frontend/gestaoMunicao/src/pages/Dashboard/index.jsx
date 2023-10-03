import LeftBar from "../../components/LerftBar";
import TopBar from "../../components/TopBar";

import { CMain, ContentMain, CSection } from "./Dashboard.styled"

import Grafico from "./components/Grafico"
import GraficoEstoqueBaixo from "./components/GraficoEstoqueBaixo";
import GraficoLinha from "./components/GraficoLinha";

function Dashboard(){
    return(
        <CMain>
            <TopBar/>
            <ContentMain>                
                <LeftBar/>
                <CSection>
                    <Grafico/>
                    <GraficoLinha/>
                    <GraficoEstoqueBaixo/>
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default Dashboard;