import { useEffect, useState } from "react";

import {
    Cmain,
    Municao,
    Fornecedor,
    Quantidade,
    ButtonBlock
} from './FormEmprestimo.styled';

function FormEmprestimo({ getDadosForm, obj, cadastrar }) {

    const [municaos, setMunicaos] = useState([]);
    const [policiais, setPoliciais] = useState([]);
    const [isFormValid, setIsFormValid] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/municao/listaDTO")
            .then(retorno => retorno.json())
            .then(retornoConvertido => setMunicaos(retornoConvertido));

        fetch("http://localhost:8080/policial/listarDTO")
            .then(retorno => retorno.json())
            .then(retornoConvertido => setPoliciais(retornoConvertido));

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
            updatedObj.policiais.id !== 0 &&
            updatedObj.motivoEmprestimo !== '' &&
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
                    Policial: <span>(Campo Obrigatório)</span>
                </p>
                <select
                    name='policial'
                    value={obj.policial.id}
                    onChange={handleInputChange}
                >

                    <option value="">Selecione o Policial</option>
                    {policiais.map(policial => (
                        <option key={policial.id} value={policial.id}>
                            {policial.nome}
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

            <Quantidade htmlFor="motivoEmprestimo">
                <p>
                    Motivo Emprestimo: <span>(Campo Obrigatório)</span>
                </p>
                <input
                    type="text"
                    name='motivoEmprestimo'
                    id='motivoEmprestimo'
                    placeholder='Digite o Motivo do emprestimo>'
                    onChange={handleInputChange}
                    value={obj.motivoEmprestimo}
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

export default FormEmprestimo;