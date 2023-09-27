import { useState } from 'react';
import { Cmain, NomeCompleto, EmailUser, SenhaUser, ButtonBlock } from './FormUsuario.styled';

function FormUsuario({ getDadosForm, cadastrar, obj }) {

    const [isFormValid, setIsFormValid] = useState(false);

    const isEmailValid = (email) => {
        // Expressão regular para validar o formato de um email
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Evite a submissão padrão do formulário
        if (isFormValid) {
            cadastrar(); // Chame a função de cadastro;
            window.location.reload();
        }
    };

    const handleInputChange = (e) => {
        getDadosForm(e);

        // Valide os campos aqui e atualize o estado isFormValid
        const { name, value } = e.target;

        if (
            name === 'nome' &&
            value.trim() !== '' &&
            isEmailValid(obj.email) && // Verificar se o email é válido
            obj.senha !== ''
        ) {
            setIsFormValid(true);
        } else if (
            name === 'email' &&
            obj.nome !== '' &&
            value.trim() !== '' &&
            isEmailValid(value) // Verificar se o email é válido
        ) {
            setIsFormValid(true);
        } else if (
            name === 'senha' &&
            obj.nome !== '' &&
            isEmailValid(obj.email) && // Verificar se o email é válido
            value.trim() !== ''
        ) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    return (
        <Cmain>
            <NomeCompleto htmlFor="nome">
                <p>
                    Nome Completo: <span>(Campo Obrigatório)</span>
                </p>
                <input
                    type="text"
                    name='nome'
                    id='nome'
                    placeholder='Digite o Nome Completo'
                    onChange={handleInputChange}
                    value={obj.nome}
                    required
                />
            </NomeCompleto>

            <EmailUser htmlFor="email">
                <p>
                    E-mail: <span>(Campo Obrigatório)</span>
                </p>
                <input
                    type="email"
                    name='email'
                    id='email'
                    placeholder='Digite o e-mail'
                    onChange={handleInputChange}
                    value={obj.email}
                    required
                />
            </EmailUser>

            <SenhaUser htmlFor="senha">
                <p>
                    Senha: <span>(Campo Obrigatório)</span>
                </p>
                <input
                    type="text"
                    name='senha'
                    id='senha'
                    placeholder='Digite a senha'
                    onChange={handleInputChange}
                    value={obj.senha}
                    required
                />
            </SenhaUser>
            
            {!isFormValid ? (
                <ButtonBlock disabled={!isFormValid}>
                    X Salvar
                </ButtonBlock>
            ) : (
                <button onClick={handleSubmit} type='submit'>
                    Salvar
                </button>
            )}
        </Cmain>
    );
}

export default FormUsuario;