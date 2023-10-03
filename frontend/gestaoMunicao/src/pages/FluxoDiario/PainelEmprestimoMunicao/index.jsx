import { useState } from "react";

import { CMain, ContentMain, CSection} from "./EmprestimoMunicao.styled"

import AlertDialog from "../../../components/AlertDialog";
import LeftBar from "../../../components/LerftBar";
import TopBar from "../../../components/TopBar";

import FormEmprestimo from "../components/FormEmprestimo";
import HeaderFluxoDiario from "../components/HeaderFluxoDiario";

function PainelEmprestimoMunicao(){

    const emprestimo = {
        quantidade: 0,
		motivoEmprestimo: '',
        municao: {
            id: 0
        },
		policial: {
			id: 0
		}
    }

    const [emprestimos, setEmprestimos] = useState([]);
    const [objEmprestimo, setObjEmprestimo] = useState(emprestimo);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getInputForm = (e) =>{
        const { name, value } = e.target;
        setObjEmprestimo((prevEmprestimo) => {
            if (name === 'municao') {
                return {
                    ...prevEmprestimo,
                    municao: {
                        id: value
                    }
                };
            }else if(name === 'policial') {
                return {
                    ...prevEmprestimo,
                    policial: {
                        id: value
                    }
                }; 
            
            }else {
                return {
                    ...prevEmprestimo,
                    [name]: value
                };
            }
        });
    }

    const lacamenEmprestimo = () => {
        fetch("http://localhost:8080/emprestimo-municao/emprestar", {
            method: 'post',
            body: JSON.stringify(objEmprestimo),
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
                setEmprestimos([ ...emprestimos, retorno_convertido]);
                openModal();
                limparFormulario();
            }
        })
        openModal();
    }

    const limparFormulario = () =>{
        setEmprestimos(emprestimo);
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
                    <HeaderFluxoDiario titulo={"Emprestimo Munição"}/>
                    <FormEmprestimo getDadosForm={getInputForm} obj={objEmprestimo} cadastrar={lacamenEmprestimo}/>
                </CSection>
                {isModalOpen && (
                    <AlertDialog message={"Lançamento Emprestimo Munição realizado com Sucesso!"} onCancel={closeModal}/>
                )}
            </ContentMain>
        </CMain>

    );
}

export default PainelEmprestimoMunicao;