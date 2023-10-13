import { CNavBar, CUser } from "./TopBar.styled"

import LogoSistema from "../../assets/img/LogoSistema.png"
import IconUser from "../../assets/icons/iconUser.png"
import IconLogout from "../../assets/icons/iconLogout.png"
import { useNavigate } from "react-router-dom"

function TopBar(){

    const navigate = useNavigate();

    return(
        <CNavBar>
            <img src={LogoSistema} alt="" />
            <CUser>
                <img src={IconUser} alt="" />
                <p>André Luiz Carvalho Nunes</p>
            </CUser>
            <button onClick={() => navigate("/")}>
                Sair
                <img src={IconLogout} alt="" />
            </button>
        </CNavBar>
    );
}

export default TopBar;