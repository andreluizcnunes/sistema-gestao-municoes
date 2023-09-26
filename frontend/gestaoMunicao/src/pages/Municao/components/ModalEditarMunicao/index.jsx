import React, { useEffect, useState } from 'react';

import { ModalWrapper, ModalContent, ContainerButton, Marca } from "./ModalEditarMunicao.styled";

function ModelEditarMunicao({ marca, onClose, onSave }) {

    const [editedMunicao, setEditedMunicao] = useState(marca);
    const [marcas, setMarcas] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedMunicao({ ...editedMunicao, [name]: value });
    };

    const handleSave = async () => {
        try {
            // Realize a requisição PUT para a rota da API para editar o marca
            const response = await fetch('http://localhost:8080/municao/editar', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedMunicao),
            });

            if (response.ok) {
                // Se a requisição for bem-sucedida, chame a função onSave para atualizar o marca no estado pai
                onSave(editedMunicao);
                onClose();
                window.location.reload();
            } else {
                // Trate os erros da API, se necessário
                console.error('Erro ao editar Municção');
            }
        } catch (error) {
            // Trate erros de rede ou outros erros aqui
            console.error('Erro ao editar Munição:', error);
        }
    };


    useEffect(() => {
        fetch("http://localhost:8080/marca/listar")
            .then(retorno => retorno.json())
            .then(retornoConvertido => setMarcas(retornoConvertido));
    }, []);

    const handleInputChangeMarca = (event) => {
        if (event.target.name === "marca") {
            // Agora, apenas atualizamos o estado obj.marca.id com o valor selecionado
            const marcaSelecionada = event.target.value;
            getDadosForm(event); // Isso ainda atualiza os outros campos no estado obj
        } else {
            getDadosForm(event);
        }
    };

    return (
        <ModalWrapper>
            <ModalContent>
                <h2>Editar Munição</h2>
                <label>Nome da Munição:</label>
                <input
                    type="text"
                    name="nome"
                    value={editedMunicao.nome}
                    onChange={handleInputChange}
                />

                <label>Calibre:</label>
                <input
                    type="text"
                    name="nome"
                    value={editedMunicao.calibre}
                    onChange={handleInputChange}
                />

                <Marca>
                    <p>
                        Marca: <span>(Campo Obrigatório)</span>
                    </p>
                    <select
                        name='marca'
                        value={editedMunicao.marca.id}
                        onChange={handleInputChangeMarca}
                    >

                        <option value="">Selecione uma Marca</option>
                        {marcas.map(marca => (
                            <option key={marca.id} value={marca.id}>
                                {marca.nome}
                            </option>
                        ))}
                    </select>
                </Marca>
                <ContainerButton>
                    <button onClick={handleSave}>Salvar</button>
                    <button onClick={onClose}>Cancelar</button>
                </ContainerButton>
            </ModalContent>
        </ModalWrapper>
    );
}

export default ModelEditarMunicao;
