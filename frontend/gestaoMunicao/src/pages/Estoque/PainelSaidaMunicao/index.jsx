import { useState } from "react";

import { CMain, ContentMain, CSection} from "./PainelSaidaEstoque.styled"

import AlertDialog from "../../../components/AlertDialog";
import LeftBar from "../../../components/LerftBar";
import TopBar from "../../../components/TopBar";
import HeaderEstoque from "../components/HeaderEstoque";

import FormSaidaEstoque from "../components/FormSaidaEstoque";

function PainelSaidaEstoque(){

    const saidaEstoque = {
        quantidade: 0,
		motivoSaida: '',
        municao: {
            id: 0
        }
    }

    const [saidas, setSaidas] = useState([]);
    const [objSaida, setObjSaida] = useState(saidaEstoque);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getInputForm = (e) =>{
        const { name, value } = e.target;
        setObjSaida((prevSaidaEstoque) => {
            if (name === 'municao') {
                return {
                    ...prevSaidaEstoque,
                    municao: {
                        id: value
                    }
                };
            }else {
                return {
                    ...prevSaidaEstoque,
                    [name]: value
                };
            }
        });
    }

    const lacamentoEstoque = () => {
        fetch("http://localhost:8080/estoquesaida/saida", {
            method: 'post',
            body: JSON.stringify(objSaida),
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
                setSaidas([ ...saidas, retorno_convertido]);
                openModal();
                limparFormulario();
            }
        })
        openModal();
    }

    const limparFormulario = () =>{
        setObjSaida(saidaEstoque);
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
                    <HeaderEstoque titulo={"Saída de Estoque"}/>
                    <FormSaidaEstoque getDadosForm={getInputForm} obj={objSaida} cadastrar={lacamentoEstoque}/>
                </CSection>
                {isModalOpen && (
                    <AlertDialog message={"Lançamento Saida estoque realizado com Sucesso!"} onCancel={closeModal}/>
                )}
            </ContentMain>
        </CMain>

    );
}

export default PainelSaidaEstoque;