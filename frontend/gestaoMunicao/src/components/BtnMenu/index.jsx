import { useNavigate } from "react-router-dom";
import { CBotao } from "./BtnMenu.styled";

function BtnMenu({ linkBotao,iconBotao, textBotao}){

    const navigate = useNavigate();

    return(
        <CBotao onClick={() => navigate(linkBotao)}>
            {/* <img src={iconBotao} alt="" /> */}
            {textBotao}
        </CBotao>
    );
}

export default BtnMenu;