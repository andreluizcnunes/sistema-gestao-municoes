import { useState } from "react";

import { CMain, ContentMain, CSection } from "./PolicialCadastrar.styled"

import TopBar from "../../../components/TopBar";
import LeftBar from "../../../components/LerftBar"
import HeaderPolicial from "../components/HeaderPolicial";
import FormPolicial from "../components/FormPolicial";

import AlertDialog from "../../../components/AlertDialog";

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
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                openModal();
            }else{
                setPoliciais([ ...policiais, retorno_convertido]);
                limparFormulario();
            }
        })

        openModal();
    }

    const limparFormulario = () => {
        setObjPolicial(policial);
    }

    const openModal = () =>{
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        limpaFormulario();
    };


    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderPolicial  titulo={"Cadastrar Policial"} />
                    <FormPolicial getDadosForm={getInputForm} cadastrar={cadastrarPolicial} obj={objPolicial}/>
                </CSection>
                {isModalOpen && (
                    <AlertDialog message={"Cadastro realizado com Sucesso!"} onCancel={closeModal}/>
                )}
            </ContentMain>
        </CMain>
    );
}

export default PainelPolicialCadastro;