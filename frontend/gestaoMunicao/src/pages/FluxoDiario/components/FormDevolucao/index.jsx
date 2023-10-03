import { useEffect, useState } from "react";

import {
    Cmain,
    Fornecedor,
    Quantidade,
    ButtonBlock
} from './FormDevolucao.styled';

function FormDevolucao({ getDadosForm, obj, cadastrar }) {

    const [policiais, setPoliciais] = useState([]);
    const [emprestimos, setEmprestimos] = useState([]);
    const [isFormValid, setIsFormValid] = useState(true);

    useEffect(() => {

        fetch("http://localhost:8080/policial/listarDTO")
            .then(retorno => retorno.json())
            .then(retornoConvertido => setPoliciais(retornoConvertido));

        fetch("http://localhost:8080/emprestimo-municao/listarDTO")
        .then(retorno => retorno.json())
        .then(retornoConvertido => setEmprestimos(retornoConvertido));
           
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
            updatedObj.policiais.id !== 0 &&
            updatedObj.emprestimoMunicao !== 0 &&
            updatedObj.quantidade !== 0;

        setIsFormValid(areFieldsFilled);
    };


    return (
        <Cmain>

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

            <Fornecedor>
                <p>
                    Emprestimo: <span>(Campo Obrigatório)</span>
                </p>
                <select
                    name='emprestimoMunicao'
                    value={obj.emprestimoMunicao.id}
                    onChange={handleInputChange}
                >

                    <option value="">Selecione o Emprestimo</option>
                    {emprestimos.map(emprestimoMunicao => (
                        <option key={emprestimoMunicao.id} value={emprestimoMunicao.id}>
                            {emprestimoMunicao.policial}
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

export default FormDevolucao;