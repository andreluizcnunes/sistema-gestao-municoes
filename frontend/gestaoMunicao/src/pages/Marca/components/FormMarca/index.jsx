import { useState } from 'react';

import { Cmain, NomeMarca, ButtonBlock } from './FormMarca.styled';

function FormMarca({ getDadosForm, cadastrar, obj }){

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
            updatedObj.nome.trim() !== '';

        setIsFormValid(areFieldsFilled);
    };

    return(
        <Cmain>
            <NomeMarca htmlFor="nomeMarca">
                <p>
                    Nome: <span>(Campo Obrigatório)</span>
                </p>
                <input 
                    type="text" 
                    name='nome' 
                    id='nomeMarca' 
                    placeholder='Digite o Nome da Marca'
                    onChange={handleInputChange}
                    value={obj.nome}
                    required
                />
            </NomeMarca>           

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

export default FormMarca;