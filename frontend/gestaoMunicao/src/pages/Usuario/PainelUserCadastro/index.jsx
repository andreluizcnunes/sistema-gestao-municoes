import { CMain, ContentMain, CSection } from "./UserCadastro.styled"


import TopBar from "../../../components/TopBar";
import LeftBar from "../../../components/LerftBar"
import HeaderUser from "../components/HeaderUser";
import FormUsuario from "../components/FormUsuario";
import { useState } from "react";

function PainelUserCadastro(){

    const usuario = {
        nome: '',
        email: '',
        senha:''
    }

    const [usuarios, setUsuarios] = useState([]);
    const [objUsuario, setObjUsuario] = useState(usuario);

    const getInputForm = (e) => {
        setObjUsuario({ ...objUsuario, [e.target.name]:e.target.value});
    }

    const cadastroUsuario = () =>{
        fetch("http://localhost:8080/users/cadastrar", {
            method: 'post',
            body: JSON.stringify(objUsuario),
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })

        .then(retorno => retorno.json())
        .then(retorno_convertido => {
            if(retorno_convertido.mensagem != undefined){
                alert(retorno_convertido.mensagem);
            }else{
                setUsuarios([...usuarios, retorno_convertido]);
                alert("Usuario cadastrado com Sucesso!");
                limpaFormulario();
            }
        })
    }

    const limpaFormulario = () =>{
        setObjUsuario(usuario);
    }


    return(
        <CMain>
            <TopBar/>
            <ContentMain>
                <LeftBar/>
                <CSection>
                    <HeaderUser  titulo={"Cadastrar Usuário"} />
                    <FormUsuario getDadosForm={getInputForm} cadastrar={cadastroUsuario} obj={objUsuario}/>
                </CSection>
            </ContentMain>
        </CMain>
    );
}

export default PainelUserCadastro;