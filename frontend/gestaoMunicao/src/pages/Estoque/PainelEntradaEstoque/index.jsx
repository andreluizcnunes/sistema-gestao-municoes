import { useState } from "react";

import { CMain, ContentMain, CSection} from "./PainelEntradaEstoque.styled"

import AlertDialog from "../../../components/AlertDialog";
import LeftBar from "../../../components/LerftBar";
import TopBar from "../../../components/TopBar";
import HeaderEstoque from "../components/HeaderEstoque";

import FormEntradaEstoque from "../components/FormEntradaEstoque";

function PainelEntradaEstoque(){

    const entradaEstoque = {
        quantidade: 0,
        municao: {
            id: 0
        },
        fornecedor: {
            id: 0
        }
    }

    const [entradas, setEntradas] = useState([]);
    const [objEntrada, setObjEntrada] = useState(entradaEstoque);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getInputForm = (e) =>{
        const { name, value } = e.target;
        setObjEntrada((prevEntradaEstoque) => {
            if (name === 'municao') {
                return {
                    ...prevEntradaEstoque,
                    municao: {
                        id: value
                    }
                };
            }else if(name === 'fornecedor') {
                return {
                    ...prevEntradaEstoque,
                    fornecedor: {
                        id: value
                    }
                }; 
            
            }else {
                return {
                    ...prevEntradaEstoque,
                    [name]: value
                };
            }
        });
    }

    const lacamentoEstoque = () => {
        fetch("http://localhost:8080/entradaestoque/newEntrada", {
            method: 'post',
            body: JSON.stringify(objEntrada),
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
                setEntradas([ ...entradas, retorno_convertido]);
                openModal();
                limparFormulario();
            }
        })
        openModal();
    }

    const limparFormulario = () =>{
        setObjEntrada(entradaEstoque);
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
                    <HeaderEstoque titulo={"Entrada de Estoque"}/>
                    <FormEntradaEstoque getDadosForm={getInputForm} obj={objEntrada} cadastrar={lacamentoEstoque}/>
                </CSection>
                {isModalOpen && (
                    <AlertDialog message={"Lançamento Entrada estrada estoque realizado com Sucesso!"} onCancel={closeModal}/>
                )}
            </ContentMain>
        </CMain>

    );
}

export default PainelEntradaEstoque;