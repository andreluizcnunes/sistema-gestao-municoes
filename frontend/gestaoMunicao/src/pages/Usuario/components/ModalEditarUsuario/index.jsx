import React, { useState } from 'react';

import { 
    ModalWrapper, 
    ModalContent,
    ContainerButton, 
} from "./ModalEditarUsuario.styled"

function ModalEditarUsuario({ usuario, onClose, onSave }) {

    const [editedUsuario, setEditedUsuario] = useState(usuario);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
    setEditedUsuario((prevEditedUsuario) => ({
        ...prevEditedUsuario,
        [name]: value,
    }));
    };

    const handleSave = async () => {
        try {
            // Realize a requisição PUT para a rota da API para editar o Policial
            const response = await fetch('http://localhost:8080/users/editar', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedUsuario),
            });

            if (response.ok) {
                // Se a requisição for bem-sucedida, chame a função onSave para atualizar o marca no estado pai
                onSave(editedUsuario);
                onClose();
                window.location.reload();
            } else {
                // Trate os erros da API, se necessário
                console.error('Erro ao editar Usuario');
            }
        } catch (error) {
            // Trate erros de rede ou outros erros aqui
            console.error('Erro ao editar Usuario:', error);
        }
    };

    return (
        <ModalWrapper>
            <ModalContent>
                <h2>Editar Usuario</h2>

                <label>Nome da Usuario:</label>
                <input
                    type="text"
                    name="nome"
                    value={editedUsuario.nome}
                    onChange={handleInputChange}
                />

                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={editedUsuario.email}
                    onChange={handleInputChange}
                />

                <label>Senha:</label>
                <input
                    type="password"
                    name="senha"
                    value={editedUsuario.senha}
                    onChange={handleInputChange}
                    placeholder="Digite a senha"
                />

                <ContainerButton>
                    <button onClick={handleSave}>Salvar</button>
                    <button onClick={onClose}>Cancelar</button>
                </ContainerButton>
            </ModalContent>
        </ModalWrapper>
    );
}

export default ModalEditarUsuario;
