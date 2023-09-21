import { CMain, ContentMain, CSection } from "./User.styled"
import { useEffect, useState } from "react";

import TopBar from "../../../components/TopBar";
import LeftBar from "../../../components/LerftBar";
import HeaderUser from "../components/HeaderUser"
import TabelaUsuario from "../components/TabelaUsuario";

function PainelUser(){

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/users/lista")
        .then(retorno => retorno.json())
        .then(retornoConvertido => setUsuarios(retornoConvertido));
    }, []);

    
    return(
        <CMain>
            <TopBar/>
            <ContentMain>                
                <LeftBar/>
                <CSection>
                    <HeaderUser titulo={"Painel Usuário"} />
                    <TabelaUsuario vetor={usuarios}/>
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default PainelUser;