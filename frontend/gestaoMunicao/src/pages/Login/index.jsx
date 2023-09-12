import { 
    CLogin, 
    CInput, 
    InputLogin } from "./Login.styled";

import LogoSistema from "../../assets/img/LogoSistema.png"
import iconUser from "../../assets/icons/iconUser.png"
import iconSenha from "../../assets/icons/iconSenha.png"

function Login(){
    return(
        <CLogin>
            <form>
                <img src={LogoSistema} alt="" />
                <CInput>
                    <InputLogin>
                        <img src={iconUser} alt="" />
                        <input type="text" placeholder="Digite o usuário"/>
                    </InputLogin>

                    <InputLogin>
                        <img src={iconSenha} alt="" />
                        <input type="password" placeholder="Digite a senha"/>
                    </InputLogin>

                    <button>Entrar</button>

                    <a href="/login">esqueceu a senha?</a>
                </CInput>
            </form>
        </CLogin>
    );
}

export default Login;