import {
    CLogin,
    CInput,
    InputLogin
} from "./Login.styled";

import LogoSistema from "../../assets/img/LogoSistema.png"
import iconUser from "../../assets/icons/iconUser.png"
import iconSenha from "../../assets/icons/iconSenha.png"
import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // console.log("E-mail: " + typeof(email) + " Senha: " + typeof(password))

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const bodyData = {
                email: email,
                senha: password
            }


            const response = await fetch('http://localhost:8080/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bodyData),
            });

            if (response.ok) {
                // Credenciais corretas, redirecione para a dashboard ou outra página
                navigate('/dashboard');
            } else {
                setError('Credenciais incorretas. Verifique seu email e senha.');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };

    return (
        <CLogin>
            <form onSubmit={handleSubmit}>
                <img src={LogoSistema} alt="" />
                <CInput>
                    <InputLogin>
                        <img src={iconUser} alt="" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Digite o E-mail"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </InputLogin>

                    <InputLogin>
                        <img src={iconSenha} alt="" />
                        <input
                            type="password"
                            name="senha"
                            placeholder="Digite a senha"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </InputLogin>
                    {error && <p>{error}</p>}

                    <button type="submit">Entrar</button>

                    <a href="/login">esqueceu a senha?</a>
                </CInput>
            </form>
        </CLogin>
    );
}

export default Login;