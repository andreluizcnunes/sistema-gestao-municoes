import React, { useEffect, useState } from 'react';

import { ModalWrapper, ModalContent, ContainerButton } from "./ModelEditarMacar.styled"

function ModalEditarMarca({ marca, onClose, onSave }) {

    const [editedMarca, setEditedMarca] = useState(marca);
    const [isDirty, setIsDirty] = useState(false); // Estado para rastrear alterações

    const [validationErrors, setValidationErrors] = useState({
        nome: ''
    });

    useEffect(() => {
        // Verifique se o objeto 'editedUsuario' é diferente do objeto 'usuario' original
        const isEdited = JSON.stringify(editedMarca) !== JSON.stringify(marca);
        setIsDirty(isEdited);
    }, [editedMarca, marca]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // setEditedPolicial({ ...editedPolicial, [name]: value });
        setEditedMarca((prevEditedMarca) => ({
            ...prevEditedMarca,
            [name]: value,
        }));
    };

    const validateNome = () => {
        if (!editedMarca.nome) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                nome: 'O nome da Marca é obrigatório.',
            }));
        } else {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                nome: '',
            }));
        }
    };

    const handleSave = async () => {
        // Validar os campos antes de tentar salvar
        validateNome();

        // Verificar se há erros de validação
        if (
            validationErrors.nome
        ) {
            return; // Impedir que o salvamento continue se houver erros
        }

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
                    onBlur={validateNome}
                />
                <ContainerButton>
                    <button onClick={handleSave} disabled={!isDirty}>Salvar</button>
                    <button onClick={onClose}>Cancelar</button>
                </ContainerButton>
            </ModalContent>
        </ModalWrapper>
    );
}

export default ModalEditarMarca;
