import { CNavBar, CUser } from "./TopBar.styled"

import LogoSistema from "../../assets/img/LogoSistema.png"
import IconUser from "../../assets/icons/iconUser.png"
import IconLogout from "../../assets/icons/iconLogout.png"

function TopBar(){
    return(
        <CNavBar>
            <img src={LogoSistema} alt="" />
            <CUser>
                <img src={IconUser} alt="" />
                <p>André Luiz Carvalho Nunes</p>
            </CUser>
            <button>
                Sair
                <img src={IconLogout} alt="" />
            </button>
        </CNavBar>
    );
}

export default TopBar;