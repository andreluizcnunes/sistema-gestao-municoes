import ButtonBar from "./ButtonBar";
import { CLeftBar } from "./LeftBar.styled";

function LeftBar(){

    return(
        <CLeftBar>
            <ButtonBar link={'/dashboard'} texto={'Inicio'}/>
            <ButtonBar link={'/estoque'} texto={'Estoque'}/>
            <ButtonBar link={'/fluxodiario'} texto={'Fuxo Diário'}/>
            <ButtonBar link={'/municao'} texto={'Munições'}/>
            <ButtonBar link={'/policial'} texto={'Policiais'}/>
            <ButtonBar link={'/fornecedor'} texto={'Fornecedores'}/>
            <ButtonBar link={'/marca'} texto={'Marca'}/>
            <ButtonBar link={'/usuario'} texto={'Usuários'}/>
        </CLeftBar>
    );
}

export default LeftBar;