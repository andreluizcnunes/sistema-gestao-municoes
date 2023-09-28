import { useState } from 'react';

import { Cmain, RazaoSocial, Cnpj, Inscricao, GroupInput, ButtonBlock } from './FormFornecedor.styled';

function FormFornecedor({ getDadosForm, obj, cadastrar }){

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
            updatedObj.razaoSocial.trim() !== '' &&
            updatedObj.cnpj.trim() !== '' &&
            updatedObj.inscricao.trim() !== '';

        setIsFormValid(areFieldsFilled);
    };


    return(
        <Cmain>
            <RazaoSocial htmlFor="razaoSocial">
                <p>
                    Razão Social: <span>(Campo Obrigatório)</span>
                </p>
                <input 
                    type="text" 
                    name='razaoSocial' 
                    id='razaoSocial' 
                    placeholder='Digite a Razão Social'
                    onChange={handleInputChange} 
                    value={obj.razaoSocial}
                    required
                />
            </RazaoSocial>

            <GroupInput>
                <Cnpj htmlFor="cnpj">
                    <p>
                        CNPJ: <span>(Campo Obrigatório)</span>
                    </p>
                    <input 
                        type="number" 
                        name='cnpj' 
                        id='cnpj' 
                        placeholder='Digite o CNPJ' 
                        onChange={handleInputChange}
                        value={obj.cnpj}
                        required
                    />
                </Cnpj>

                <Inscricao htmlFor="inscricao">
                    <p>
                        Inscrição Estadual:
                    </p>
                    <input 
                        type="number" 
                        name='inscricao' 
                        id='inscricao' 
                        placeholder='Digite a Inscrição'
                        onChange={handleInputChange} 
                        value={obj.inscricao}
                    />
                </Inscricao>
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

export default FormFornecedor;