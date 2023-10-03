import { useEffect, useState } from "react";

import {
    Cmain,
    Municao,
    Motivo,
    Quantidade,
    ButtonBlock
} from './FormSaida.styled';

function FormSaidaEstoque({ getDadosForm, obj, cadastrar }) {

    const [municaos, setMunicaos] = useState([]);
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8080/municao/listaDTO")
            .then(retorno => retorno.json())
            .then(retornoConvertido => setMunicaos(retornoConvertido));

    }, []);

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
            updatedObj.municao.id !== 0 &&
            updatedObj.motivoSaida !== '' &&
            updatedObj.quantidade !== 0;

        setIsFormValid(areFieldsFilled);
    };


    return (
        <Cmain>
            <Municao>
                <p>
                    Munição: <span>(Campo Obrigatório)</span>
                </p>
                <select
                    name='municao'
                    value={obj.municao.id}
                    onChange={handleInputChange}
                >

                    <option value="">Selecione a munição</option>
                    {municaos.map(municao => (
                        <option key={municao.id} value={municao.id}>
                            {municao.nome}
                        </option>
                    ))}
                </select>
            </Municao>

            <Motivo>
                <p>
                    Montivo da Saida: <span>(Campo Obrigatório)</span>
                </p>
                <input
                    type="text"
                    name='motivoSaida'
                    id='motivoSaida'
                    placeholder='Qual o motivo da saida?'
                    onChange={handleInputChange}
                    value={obj.motivoSaida}
                    required
                />
            </Motivo>

            <Quantidade htmlFor="quantidade">
                <p>
                    Quantidade: <span>(Campo Obrigatório)</span>
                </p>
                <input
                    type="number"
                    name='quantidade'
                    id='quantidade'
                    placeholder='Digite o quantidade'
                    onChange={handleInputChange}
                    value={obj.quantidade}
                    required
                />
            </Quantidade>


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

export default FormSaidaEstoque;