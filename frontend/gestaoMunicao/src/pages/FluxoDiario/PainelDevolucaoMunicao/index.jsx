import { useState } from "react";

import { CMain, ContentMain, CSection} from "./DevolucaoMunicao.styled"

import AlertDialog from "../../../components/AlertDialog";
import LeftBar from "../../../components/LerftBar";
import TopBar from "../../../components/TopBar";

import HeaderFluxoDiario from "../components/HeaderFluxoDiario";
import FormDevolucao from "../components/FormDevolucao";

function PainelDevolucaoMunicao(){

    const devolucao = {
        quantidade: 0,
		policial: {
			id: 0
		},
		emprestimoMunicao:{
			id: 0
		}
    }

    const [devolucoes, setDevolucoes] = useState([]);
    const [objDevolucao, setObjDevolucao] = useState(devolucao);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getInputForm = (e) =>{
        const { name, value } = e.target;
        setObjDevolucao((prevDevolucao) => {
            if(name === 'policial') {
                return {
                    ...prevDevolucao,
                    policial: {
                        id: value
                    }
                }; 
            
            }else if(name === 'emprestimoMunicao') {
                return {
                    ...prevDevolucao,
                    emprestimoMunicao: {
                        id: value
                    }
                }; 
            
            }else {
                return {
                    ...prevDevolucao,
                    [name]: value
                };
            }
        });
    }

    const lacamentoEstoque = () => {
        fetch("http://localhost:8080/devolucao-municao/devolucao", {
            method: 'post',
            body: JSON.stringify(objDevolucao),
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
                setDevolucoes([ ...devolucoes, retorno_convertido]);
                openModal();
                limparFormulario();
            }
        })
        openModal();
    }

    const limparFormulario = () =>{
        setObjDevolucao(devolucao);
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
                    <HeaderFluxoDiario titulo={"Devolução de Estoque"}/>
                    <FormDevolucao getDadosForm={getInputForm} obj={objDevolucao} cadastrar={lacamentoEstoque}/>
                </CSection>
                {isModalOpen && (
                    <AlertDialog message={"Lançamento Devolução realizado com Sucesso!"} onCancel={closeModal}/>
                )}
            </ContentMain>
        </CMain>

    );
}

export default PainelDevolucaoMunicao;