import { useState } from "react";

import { CMain, ContentMain, CSection } from "./FornecedorCadastro.styled"

import LeftBar from "../../../components/LerftBar";
import TopBar from "../../../components/TopBar";

import HeaderFornecedor from "../components/HeaderFornecedor";
import FormFornecedor from "../components/FormFornecedor";
import AlertDialog from "../../../components/AlertDialog";

function PainelFornecedorCadastro(){

    const fornecedor = {
        razaoSocial: '',
        cnpj: '',
        inscricao: ''
    }

    const [fornecedores, setFornecedores] = useState([]);
    const [objFornecedor, setObjFornecedor] = useState(fornecedor);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getInputForm = (e) => {
        setObjFornecedor({ ...objFornecedor, [e.target.name]:e.target.value });
    }

    const cadastrarFornecedor = () => {
        fetch("http://localhost:8080/fornecedor/cadastrar", {
            method: 'post',
            body: JSON.stringify(objFornecedor),
            headers:{
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })

        .then(retorno => retorno.json())
        .then(retorno_convertido =>{
            if(retorno_convertido.mensagem != undefined){
                openModal();
            }else{
                setFornecedores([ ...fornecedores, retorno_convertido]);
                openModal();
                limparFormulario();
            }
        })
        openModal();
    }

    const limparFormulario = () =>{
        setObjFornecedor(fornecedor);
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        limparFormulario();
    };

    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderFornecedor titulo={"Cadastro de Fornecedor"}/>
                    <FormFornecedor getDadosForm={getInputForm} obj={objFornecedor} cadastrar={cadastrarFornecedor}/>
                </CSection>
                {isModalOpen && (
                    <AlertDialog message={"Cadastro realizado com Sucesso!"} onCancel={closeModal}/>
                )}
            </ContentMain>
        </CMain>
    );
}

export default PainelFornecedorCadastro;