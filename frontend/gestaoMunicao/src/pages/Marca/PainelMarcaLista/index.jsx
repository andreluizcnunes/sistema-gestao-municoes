import { CMain, ContentMain, CSection } from "./MarcaLista.styled"

import TopBar from "../../../components/TopBar";
import LeftBar from "../../../components/LerftBar"
import HeaderMarca from "../components/HeaderMarca";
import FormBuscaMarca from "../components/FormBuscaMarca";

function PainelMarcaLista(){
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
    }

    return(
        <CMain onSubmit={handleSubmit}>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderMarca  titulo={"Pesquisar Marca"} />
                    <FormBuscaMarca/>
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default PainelMarcaLista;