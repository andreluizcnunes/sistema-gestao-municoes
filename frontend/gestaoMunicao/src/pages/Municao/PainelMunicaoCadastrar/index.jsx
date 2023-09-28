import { useState } from "react";

import { CMain, ContentMain, CSection } from "./MunicaoCadastrar.styled"

import TopBar from "../../../components/TopBar";
import LeftBar from "../../../components/LerftBar"
import HeaderMunicao from "../components/HeaderMunicao";
import FormMunicao from "../components/FormMunicao";
import AlertDialog from "../../../components/AlertDialog";

function PainelMunicaoCadastrar(){

    const municao = {
        nome: '',
        calibre: '',
        quantidade: 0,
        peso: '',
        marca: {
            id: 0
        }
    }

    const [municoes, setMunicoes] = useState([]);
    const [objMunicao, setObjMunicao] = useState(municao);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getInputForm = (e) =>{
        const { name, value } = e.target;
        setObjMunicao((prevMunicao) => {
            if (name === 'marca') {
                return {
                    ...prevMunicao,
                    marca: {
                        id: value
                    }
                };
            } else {
                return {
                    ...prevMunicao,
                    [name]: value
                };
            }
        });
    }

    const cadastrarMunicao = () => {
        fetch("http://localhost:8080/municao/cadastrar", {
            method: 'post',
            body: JSON.stringify(objMunicao),
            headers:{
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })

        .then(retorno => {
            // Verificar o status da resposta
            if (retorno.status === 400) {
                // Status 400 indica um erro de solicitação
                return retorno.text(); // Ler a mensagem de erro como texto
            } else {
                // Se o status não for 400, tentar analisar como JSON
                return retorno.json();
            }
    
        })
        .then(retorno => retorno.json())
        .then(retorno_convertido => {
            if(retorno_convertido.mensagem != undefined){
                openModal();
            }else{
                setMunicoes([...municoes, retorno_convertido]);
                limparFormulario();
            }
        })
        openModal();
    }

    const limparFormulario = () => {
        setObjMunicao(municao);
    }

    const openModal = () =>{
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
                    <HeaderMunicao  titulo={"Cadastrar Munição"} />
                    <FormMunicao 
                        getDadosForm={getInputForm} 
                        cadastrar={cadastrarMunicao} 
                        obj={objMunicao}
                    />
                </CSection>
                {isModalOpen && (
                    <AlertDialog message={"Cadastro realizado com Sucesso!"} onCancel={closeModal}/>
                )}
            </ContentMain>
        </CMain>
    );
}

export default PainelMunicaoCadastrar;