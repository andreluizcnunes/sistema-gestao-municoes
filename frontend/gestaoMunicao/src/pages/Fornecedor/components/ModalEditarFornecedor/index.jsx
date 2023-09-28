import React, { useEffect, useState } from 'react';

import { ModalWrapper, ModalContent, ContainerButton } from "./ModalEditarFornecedor.styled"

function ModalEditarFornecedor({ fornecedor, onClose, onSave }) {

    const [editedFornecedor, setEditedFornecedor] = useState(fornecedor);
    const [isDirty, setIsDirty] = useState(false); // Estado para rastrear alterações

    const [validationErrors, setValidationErrors] = useState({
        razaoSocial: '',
        cnpj: '',
        inscricao: ''
    });


    useEffect(() => {
        // Verifique se o objeto 'editedUsuario' é diferente do objeto 'usuario' original
        const isEdited = JSON.stringify(editedFornecedor) !== JSON.stringify(fornecedor);
        setIsDirty(isEdited);
    }, [editedFornecedor, fornecedor]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedFornecedor((prevEditedFornecedor) => ({
            ...prevEditedFornecedor,
            [name]: value,
        }));
    };

    const validateRazaoSocial = () => {
        if (!editedFornecedor.razaoSocial) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                razaoSocial: 'O Razão Social é obrigatório.',
            }));
        } else {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                razaoSocial: '',
            }));
        }
    };

    const validateCnpj = () => {
        if (!editedFornecedor.cnpj) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                cnpj: 'O CNPJ é obrigatório.',
            }));
        } else {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                cnpj: '',
            }));
        }
    };

    const validateInscricao = () => {
        if (!editedFornecedor.inscricao) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                inscricao: 'A Inscrição é obrigatório.',
            }));
        } else {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                inscricao: '',
            }));
        }
    };

    const handleSave = async () => {
        // Validar os campos antes de tentar salvar
        validateRazaoSocial();
        validateCnpj();
        validateInscricao();

        // Verificar se há erros de validação
        if (
            validationErrors.nome
        ) {
            return; // Impedir que o salvamento continue se houver erros
        }

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
                // Se a requisição for bem-sucedida, chame a função onSave para atualizar o marca no estado pai
                onSave(editedFornecedor);
                onClose();
                window.location.reload();
            } else {
                // Trate os erros da API, se necessário
                console.error('Erro ao editar Fornecedor');
            }
        } catch (error) {
            // Trate erros de rede ou outros erros aqui
            console.error('Erro ao editar Fornecedor:', error);
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
                    onBlur={validateRazaoSocial}
                />
                <label>CNPJ:</label>
                <input
                    type="number"
                    name="cnpj"
                    value={editedFornecedor.cnpj}
                    onChange={handleInputChange}
                    onBlur={validateCnpj}
                />
                <label>Inscrição:</label>
                <input
                    type="number"
                    name="inscricao"
                    value={editedFornecedor.inscricao}
                    onChange={handleInputChange}
                    onBlur={validateInscricao}
                />
                <ContainerButton>
                    <button onClick={handleSave} disabled={!isDirty}>Salvar</button>
                    <button onClick={onClose}>Cancelar</button>
                </ContainerButton>
            </ModalContent>
        </ModalWrapper>
    );
}

export default ModalEditarFornecedor;
