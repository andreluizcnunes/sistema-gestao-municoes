import LeftBar from "../../components/LerftBar";
import TopBar from "../../components/TopBar";

import { CMain } from "./Dashboard.styled"

function Dashboard(){
    return(
        <CMain>
            <TopBar/>
            <LeftBar/>
        </CMain>
    );
}

export default Dashboard;