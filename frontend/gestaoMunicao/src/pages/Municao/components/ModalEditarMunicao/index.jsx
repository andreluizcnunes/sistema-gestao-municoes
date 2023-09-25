import React, { useState } from 'react';

import { ModalWrapper, ModalContent, ContainerButton } from "./ModalEditarMunicao.styled";

function ModelEditarMunicao({ marca, onClose, onSave }) {

    const [editedMunicao, setEditedMunicao] = useState(marca);

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
                <ContainerButton>
                    <button onClick={handleSave}>Salvar</button>
                    <button onClick={onClose}>Cancelar</button>
                </ContainerButton>
            </ModalContent>
        </ModalWrapper>
    );
}

export default ModelEditarMunicao;
