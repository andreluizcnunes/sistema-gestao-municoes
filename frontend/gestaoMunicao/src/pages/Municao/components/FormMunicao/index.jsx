import { useEffect, useState } from 'react';
import { Cmain, NomeMunicao, Marca, GroupInput, Calibre, Peso } from './FormMunicao.styled';

function FormMunicao({ getDadosForm, cadastrar, obj }) {

    const [marcas, setMarcas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/marca/listar")
            .then(retorno => retorno.json())
            .then(retornoConvertido => setMarcas(retornoConvertido));
    }, []);

    const handleInputChange = (event) => {
        if (event.target.name === "marca") {
            // Agora, apenas atualizamos o estado obj.marca.id com o valor selecionado
            const marcaSelecionada = event.target.value;
            getDadosForm(event); // Isso ainda atualiza os outros campos no estado obj
        } else {
            getDadosForm(event);
        }
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
                    onChange={getDadosForm}
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
                        onChange={getDadosForm}
                        value={obj.calibre}
                        required
                    />
                </Calibre>

                <Peso htmlFor="Peso">
                    <p>
                        Peso:
                    </p>
                    <input
                        type="text"
                        name='peso'
                        id='peso'
                        placeholder='Digite o Peso'
                        onChange={getDadosForm}
                        value={obj.peso}
                    />
                </Peso>
            </GroupInput>

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


            <button onClick={cadastrar} type='submit'>
                Salvar
            </button>
        </Cmain>
    );
}

export default FormMunicao;