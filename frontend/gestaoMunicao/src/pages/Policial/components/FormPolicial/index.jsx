import { useState } from 'react';

import InputMask from 'react-input-mask';

import {
    Cmain,
    NomeCompleto,
    PolicialCpf,
    PolicialRg,
    GroupInput,
    DataNascimento,
    PolicialTelefone,
    ButtonBlock
} from './FormPolicial.styled';

function FormPolicial({ getDadosForm, cadastrar, obj }) {

    const [isFormValid, setIsFormValid] = useState(false);

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
        const updatedObj = {
            ...obj,
            [name]: value
        };

        const areFieldsFilled =
            updatedObj.nome.trim() !== '' &&
            updatedObj.cpf.trim() !== '' &&
            updatedObj.rg.trim() !== '' &&
            updatedObj.dataNascimento.trim() !== '' &&
            updatedObj.telefone.trim() !== '';

        setIsFormValid(areFieldsFilled);
    };

    return (
        <Cmain>
            <NomeCompleto htmlFor="nome">
                <p>
                    Nome Completo <span>(Campo Obrigatório)</span>
                </p>
                <input
                    type="text"
                    name='nome'
                    id='nome'
                    placeholder='Digite o Nome Completo'
                    onChange={handleInputChange}
                    value={obj.nome}
                    required
                    maxLength={50}
                />
            </NomeCompleto>

            <GroupInput>
                <PolicialCpf htmlFor="cpf">
                    <p>
                        CPF: <span>(Campo Obrigatório)</span>
                    </p>
                    <InputMask
                        mask="999.999.999-99" // Defina a máscara do CPF
                        type="text"
                        name="cpf"
                        id="cpf"
                        placeholder="Digite o CPF"
                        onChange={handleInputChange}
                        value={obj.cpf}
                        required
                    />
                </PolicialCpf>

                <PolicialRg htmlFor="rg">
                    <p>
                        RG:
                    </p>
                    <input
                        type="number"
                        name='rg'
                        id='rg'
                        placeholder='Digite o RG'
                        onChange={handleInputChange}
                        value={obj.rg}
                    />
                </PolicialRg>
            </GroupInput>

            <GroupInput>
                <DataNascimento htmlFor="dataNascimento">
                    <p>
                        Data de Nascimento: <span>(Campo Obrigatório)</span>
                    </p>
                    <input
                        type="date"
                        name='dataNascimento'
                        id='dataNascimento'
                        placeholder='Digite a data nascimento'
                        onChange={handleInputChange}
                        value={obj.dataNascimento}
                        required
                    />
                </DataNascimento>

                <PolicialTelefone htmlFor="telefone">
                    <p>
                        Telefone:
                    </p>
                    <input
                        type="number"
                        name='telefone'
                        id='telefone'
                        placeholder='Digite o Telefone'
                        onChange={handleInputChange}
                        value={obj.telefone}
                    />
                </PolicialTelefone>
            </GroupInput>

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

export default FormPolicial;