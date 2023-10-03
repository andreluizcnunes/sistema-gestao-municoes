import { useEffect, useState } from "react";

import {
    Cmain,
    Municao,
    Fornecedor,
    Quantidade,
    ButtonBlock
} from './FormEntrada.styled';

function FormEntradaEstoque({ getDadosForm, obj, cadastrar }) {

    const [municaos, setMunicaos] = useState([]);
    const [fornecedores, setFornecedores] = useState([]);
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8080/municao/listaDTO")
            .then(retorno => retorno.json())
            .then(retornoConvertido => setMunicaos(retornoConvertido));

        fetch("http://localhost:8080/fornecedor/lista")
            .then(retorno => retorno.json())
            .then(retornoConvertido => setFornecedores(retornoConvertido));

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
            updatedObj.fornecedor.id !== 0 &&
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

            <Fornecedor>
                <p>
                    Fornecedor: <span>(Campo Obrigatório)</span>
                </p>
                <select
                    name='fornecedor'
                    value={obj.fornecedor.id}
                    onChange={handleInputChange}
                >

                    <option value="">Selecione o Fornecedor</option>
                    {fornecedores.map(fornecedor => (
                        <option key={fornecedor.id} value={fornecedor.id}>
                            {fornecedor.razaoSocial}
                        </option>
                    ))}
                </select>
            </Fornecedor>

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

export default FormEntradaEstoque;