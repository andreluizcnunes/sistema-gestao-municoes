import React, { useState } from 'react';

import { ModalWrapper, ModalContent, ContainerButton } from "./ModelEditarMacar.styled"

function ModelEditarMarca({ marca, onClose, onSave }) {

    const [editedMarca, setEditedMarca] = useState(marca);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedMarca({ ...editedMarca, [name]: value });
    };

    const handleSave = async () => {
        try {
            // Realize a requisição PUT para a rota da API para editar o marca
            const response = await fetch('http://localhost:8080/marca/editar', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedMarca),
            });

            if (response.ok) {
                // Se a requisição for bem-sucedida, chame a função onSave para atualizar o marca no estado pai
                onSave(editedMarca);
                onClose();
                window.location.reload();
            } else {
                // Trate os erros da API, se necessário
                console.error('Erro ao editar marca');
            }
        } catch (error) {
            // Trate erros de rede ou outros erros aqui
            console.error('Erro ao editar marca:', error);
        }
    };

    return (
        <ModalWrapper>
            <ModalContent>
                <h2>Editar Marca</h2>
                <label>Nome da Marca:</label>
                <input
                    type="text"
                    name="nome"
                    value={editedMarca.nome}
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

export default ModelEditarMarca;
