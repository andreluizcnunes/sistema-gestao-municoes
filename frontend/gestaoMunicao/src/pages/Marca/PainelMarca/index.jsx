import { CMain, ContentMain, CSection } from "./Marca.styled"

import TopBar from "../../../components/TopBar";
import LeftBar from "../../../components/LerftBar"
import HeaderMarca from "./components/HeaderMarca";
import { useEffect, useState } from "react";
import TabelaMarca from "./components/TabelaMarca";

function PainelMarca(){

    const marca = {
        id: 0,
        nome: ''
    }

    const [marcas, setMarcas] = useState([]);
    const [objMarca, setObjMarca] = useState(marca);

    useEffect(() => {
        fetch("http://localhost:8080/marca/listar")
        .then(retorno => retorno.json())
        .then(retornoConvertido => setMarcas(retornoConvertido));
    }, []);

    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderMarca  titulo={"Painel Marca"} />
                    <TabelaMarca 
                        vetor={marcas}
                    />
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default PainelMarca;