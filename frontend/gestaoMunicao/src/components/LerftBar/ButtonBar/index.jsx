import { useNavigate } from "react-router-dom";

import {Cbutton} from "./ButtonBar.styled";

function ButtonBar( { link, texto }){

    const navigate = useNavigate();

    return(
        <Cbutton onClick={() => navigate(link)}>
            {texto}
        </Cbutton>
    );
}

export default ButtonBar;