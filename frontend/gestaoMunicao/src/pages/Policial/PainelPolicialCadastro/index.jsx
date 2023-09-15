import { CMain, ContentMain, CSection } from "./PolicialCadastrar.styled"

import TopBar from "../../../components/TopBar";
import LeftBar from "../../../components/LerftBar"
import HeaderPolicial from "../PainelPolicial/components/HeaderPolicial";
import FormPolicial from "../PainelPolicial/components/FormPolicial";
import { useState } from "react";

function PainelPolicialCadastro(){

    const policial = {
        nome: '',
        cpf: '',
        rg: '',
        dataNascimento: '',
        telefone: '',
    }

    const [policiais, setPoliciais] = useState([]);
    const [objPolicial, setObjPolicial] = useState(policial);

    const getInputForm = (e) =>{
        setObjPolicial({ ...objPolicial, [e.target.name]:e.target.value});
    }

    const cadastrarPolicial = () => {
        fetch("http://localhost:8080/policial/cadastrar", {
            method: 'post',
            body: JSON.stringify(objPolicial),
            headers:{
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })

        .then(retorno => retorno.json())
        .then(retorno_convertido => {
            if(retorno_convertido.mensagem != undefined){
                alert(retorno_convertido.mensagem);
            }else{
                setPoliciais([ ...policiais, retorno_convertido]);
                alert("Policial Cadastrado com Sucesso!");
                limparFormulario();
            }
        })
    }

    const limparFormulario = () => {
        setObjPolicial(policial);
    }


    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderPolicial  titulo={"Cadastrar Policial"} />
                    <FormPolicial getDadosForm={getInputForm} cadastrar={cadastrarPolicial} obj={objPolicial}/>
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default PainelPolicialCadastro;