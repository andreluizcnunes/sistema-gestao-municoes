import { CMain, ContentMain, CSection } from "./MarcaCadastro.styled"

import TopBar from "../../../components/TopBar";
import LeftBar from "../../../components/LerftBar"
import HeaderMarca from "../components/HeaderMarca";
import FormMarca from "../components/FormMarca";
import { useState } from "react";
import AlertDialog from "../../../components/AlertDialog";

function PainelMarcaCadastrar() {

    const marca = {
        nome: '',
    }

    const [marcas, setMarcas] = useState([]);
    const [objMarca, setObjMarca] = useState(marca);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const getInputForm = (e) => {
        setObjMarca({ ...objMarca, [e.target.name]: e.target.value });
    }


    const cadastrarMarca = () => {
        fetch("http://localhost:8080/marca/cadastrar", {
            method: 'post',
            body: JSON.stringify(objMarca),
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })

            .then(retorno => retorno.json())
            .then(retorno_convertido => {

                if (retorno_convertido.mensagem != undefined) {
                    openModal();
                } else {
                    setMarcas([...marcas, retorno_convertido]);
                    openModal();
                    limparFormulario();
                }

            })
        openModal();
    }

    //Limpar formulario
    const limparFormulario = () => {
        setObjMarca(marca);
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        limparFormulario();
    };


    return (
        <CMain>
            <TopBar />
            <ContentMain>
                <LeftBar />
                <CSection>
                    <HeaderMarca titulo={"Cadastrar Marca"} />
                    <FormMarca getDadosForm={getInputForm} cadastrar={cadastrarMarca} obj={objMarca} />
                </CSection>
                {isModalOpen && (
                    <AlertDialog message={"Cadastro realizado com Sucesso!"} onCancel={closeModal}/>
                )}
            </ContentMain>
        </CMain>
    );
}

export default PainelMarcaCadastrar;