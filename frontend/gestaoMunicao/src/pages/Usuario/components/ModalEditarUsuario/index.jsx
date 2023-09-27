import React, { useEffect, useState } from 'react';

import { 
    ModalWrapper, 
    ModalContent,
    ContainerButton, 
} from "./ModalEditarUsuario.styled"

function ModalEditarUsuario({ usuario, onClose, onSave }) {

    const [editedUsuario, setEditedUsuario] = useState(usuario);
    const [isDirty, setIsDirty] = useState(false); // Estado para rastrear alterações

    // Estados para rastrear erros de validação
    const [validationErrors, setValidationErrors] = useState({
        nome: '',
        email: '',
        senha: '',
    });

    useEffect(() => {
        // Verifique se o objeto 'editedUsuario' é diferente do objeto 'usuario' original
        const isEdited = JSON.stringify(editedUsuario) !== JSON.stringify(usuario);
        setIsDirty(isEdited);
    }, [editedUsuario, usuario]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedUsuario((prevEditedUsuario) => ({
            ...prevEditedUsuario,
            [name]: value,
        }));
    };

    // Função de validação para o campo "Nome da Usuario"
    const validateNome = () => {
        if (!editedUsuario.nome) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                nome: 'O nome do usuário é obrigatório.',
            }));
        } else {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                nome: '',
            }));
        }
    };

     // Função de validação para o campo "Email"
     const validateEmail = () => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!editedUsuario.email) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                email: 'O email é obrigatório.',
            }));
        } else if (!emailPattern.test(editedUsuario.email)) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                email: 'O email não é válido.',
            }));
        } else {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                email: '',
            }));
        }
    };

     // Função de validação para o campo "Senha"
     const validateSenha = () => {
        if (!editedUsuario.senha) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                senha: 'A senha é obrigatória.',
            }));
        } else {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                senha: '',
            }));
        }
    };

    // const handleSave = async () => {
    //     try {
    //         // Realize a requisição PUT para a rota da API para editar o Policial
    //         const response = await fetch('http://localhost:8080/users/editar', {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(editedUsuario),
    //         });

    //         if (response.ok) {
    //             // Se a requisição for bem-sucedida, chame a função onSave para atualizar o marca no estado pai
    //             onSave(editedUsuario);
    //             onClose();
    //             window.location.reload();
    //         } else {
    //             // Trate os erros da API, se necessário
    //             console.error('Erro ao editar Usuario');
    //         }
    //     } catch (error) {
    //         // Trate erros de rede ou outros erros aqui
    //         console.error('Erro ao editar Usuario:', error);
    //     }
    // };

    const handleSave = async () => {
        // Validar os campos antes de tentar salvar
        validateNome();
        validateEmail();
        validateSenha();

        // Verificar se há erros de validação
        if (
            validationErrors.nome ||
            validationErrors.email ||
            validationErrors.senha
        ) {
            return; // Impedir que o salvamento continue se houver erros
        }

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
        }
         catch (error) {
            // Trate erros de rede ou outros erros aqui
            console.error('Erro ao editar Usuario:');
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
                    onBlur={validateNome}
                />

                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={editedUsuario.email}
                    onChange={handleInputChange}
                    onBlur={validateNome}
                />

                <div className="error">{validationErrors.email}</div>

                <label>Senha:</label>
                <input
                    type="password"
                    name="senha"
                    value={editedUsuario.senha}
                    onChange={handleInputChange}
                    onBlur={validateSenha} // Validar ao perder o foco
                />

                <div className="error">{validationErrors.senha}</div>

                <ContainerButton>
                    <button onClick={handleSave} disabled={!isDirty}>Salvar</button>
                    <button onClick={onClose}>Cancelar</button>
                </ContainerButton>
            </ModalContent>
        </ModalWrapper>
    );
}

export default ModalEditarUsuario;
