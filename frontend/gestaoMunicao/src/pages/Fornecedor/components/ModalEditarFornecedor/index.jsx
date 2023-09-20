import React, { useState } from 'react';

import { ModalWrapper, ModalContent, ContainerButton } from "./ModalEditarFornecedor.styled"

function ModalEditarFornecedor({ fornecedor, onClose, onSave }) {

    const [editedFornecedor, setEditedFornecedor] = useState(fornecedor);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedFornecedor({ ...editedFornecedor, [name]: value });
    };

    const handleSave = async () => {
        try {
            // Realize a requisição PUT para a rota da API para editar o fornecedor
            const response = await fetch('http://localhost:8080/fornecedor/editar', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedFornecedor),
            });

            if (response.ok) {
                // Se a requisição for bem-sucedida, chame a função onSave para atualizar o fornecedor no estado pai
                onSave(editedFornecedor);
                onClose();
                window.location.reload();
            } else {
                // Trate os erros da API, se necessário
                console.error('Erro ao editar fornecedor');
            }
        } catch (error) {
            // Trate erros de rede ou outros erros aqui
            console.error('Erro ao editar fornecedor:', error);
        }
    };

    return (
        <ModalWrapper>
            <ModalContent>
                <h2>Editar Fornecedor</h2>
                <label>Razão Social:</label>
                <input
                    type="text"
                    name="razaoSocial"
                    value={editedFornecedor.razaoSocial}
                    onChange={handleInputChange}
                />
                <label>CNPJ:</label>
                <input
                    type="text"
                    name="cnpj"
                    value={editedFornecedor.cnpj}
                    onChange={handleInputChange}
                />
                <label>Inscrição:</label>
                <input
                    type="text"
                    name="inscricao"
                    value={editedFornecedor.inscricao}
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

export default ModalEditarFornecedor;
