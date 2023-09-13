import { CBotao } from "./BtnMenu.styled";

function BtnMenu({ linkBotao,iconBotao, textBotao}){
    return(
        <CBotao href={linkBotao}>
            <img src={iconBotao} alt="" />
            {textBotao}
        </CBotao>
    );
}

export default BtnMenu;