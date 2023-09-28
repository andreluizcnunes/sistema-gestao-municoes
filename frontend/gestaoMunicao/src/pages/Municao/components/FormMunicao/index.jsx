import { useEffect, useState } from 'react';
import {
    Cmain,
    NomeMunicao,
    Marca,
    GroupInput,
    Calibre,
    ButtonBlock
} from './FormMunicao.styled';

function FormMunicao({ getDadosForm, cadastrar, obj }) {

    const [marcas, setMarcas] = useState([]);
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8080/marca/listar")
            .then(retorno => retorno.json())
            .then(retornoConvertido => setMarcas(retornoConvertido));
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
            updatedObj.nome.trim() !== '' &&
            updatedObj.calibre.trim() !== '' &&
            updatedObj.marca.id !== 0; // Verifique se obj.marca.id existe

        setIsFormValid(areFieldsFilled);
    };


    return (
        <Cmain>
            <NomeMunicao htmlFor="NomeMunicao">
                <p>
                    Nome Munição: <span>(Campo Obrigatório)</span>
                </p>
                <input
                    type="text"
                    name='nome'
                    id='nome'
                    placeholder='Digite o Nome da Munição'
                    onChange={handleInputChange}
                    value={obj.nome}
                    required
                />
            </NomeMunicao>

            <GroupInput>
                <Calibre htmlFor="Calibre">
                    <p>
                        Calibre: <span>(Campo Obrigatório)</span>
                    </p>
                    <input
                        type="text"
                        name='calibre'
                        id='calibre'
                        placeholder='Digite o Calibre'
                        onChange={handleInputChange}
                        value={obj.calibre}
                        required
                    />
                </Calibre>

                <Marca>
                    <p>
                        Marca: <span>(Campo Obrigatório)</span>
                    </p>
                    <select
                        name='marca'
                        value={obj.marca.id}
                        onChange={handleInputChange}
                    >

                        <option value="">Selecione uma Marca</option>
                        {marcas.map(marca => (
                            <option key={marca.id} value={marca.id}>
                                {marca.nome}
                            </option>
                        ))}
                    </select>
                </Marca>

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

export default FormMunicao;