import { CMain, ContentMain, CSection } from "./FornecedorCadastro.styled"

import LeftBar from "../../../components/LerftBar";
import TopBar from "../../../components/TopBar";

import HeaderFornecedor from "../PainelFornecedor/components/HeaderFornecedor";
import FormFornecedor from "../PainelFornecedor/components/FormFornecedor";
import { useState } from "react";

function PainelFornecedorCadastro(){

    const fornecedor = {
        razaoSocial: '',
        cnpj: '',
        inscricao: ''
    }

    const [fornecedores, setFornecedores] = useState([]);
    const [objFornecedor, setObjFornecedor] = useState(fornecedor);

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
                alert(retorno_convertido.mensagem);
            }else{
                setFornecedores([ ...fornecedores, retorno_convertido]);
                alert("Fornecedor cadastrado com Sucesso!");
                limparFormulario();
            }
        })
    }

    const limparFormulario = () =>{
        setObjFornecedor(fornecedor);
    }

    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderFornecedor titulo={"Cadastro de Fornecedor"}/>
                    <FormFornecedor getDadosForm={getInputForm} obj={objFornecedor} cadastrar={cadastrarFornecedor}/>
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default PainelFornecedorCadastro;