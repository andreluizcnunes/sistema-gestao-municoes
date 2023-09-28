import React, { useEffect, useState } from 'react';

import InputMask from 'react-input-mask';

import {
    ModalWrapper,
    ModalContent,
    ContainerInput,
    ContainerButton,
    PolicialCpf,
    PolicialRg,
    PolicialDataNascimento,
    PolicialTelefone
} from "./ModalEditarPolicial.styled"

function ModalEditarPolicial({ policial, onClose, onSave }) {

    const [editedPolicial, setEditedPolicial] = useState(policial);
    const [isDirty, setIsDirty] = useState(false); // Estado para rastrear alterações

    // Estados para rastrear erros de validação
    const [validationErrors, setValidationErrors] = useState({
        nome: '',
        cpf: '',
        rg: '',
        dataNascimento: '',
        telefone: ''
    });

    useEffect(() => {
        // Verifique se o objeto 'editedUsuario' é diferente do objeto 'usuario' original
        const isEdited = JSON.stringify(editedPolicial) !== JSON.stringify(policial);
        setIsDirty(isEdited);
    }, [editedPolicial, policial]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // setEditedPolicial({ ...editedPolicial, [name]: value });
        setEditedPolicial((prevEditedPolicial) => ({
            ...prevEditedPolicial,
            [name]: value,
        }));
    };

    // Função de validação para o campo "Nome do Policial"
    const validateNome = () => {
        if (!editedPolicial.nome) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                nome: 'O nome do Policial é obrigatório.',
            }));
        } else {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                nome: '',
            }));
        }
    };

    // Função de validação para o campo "CPF"
    const validateCpf = () => {
        if (!editedPolicial.cpf) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                cpf: 'O cpf do Policial é obrigatório.',
            }));
        } else {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                cpf: '',
            }));
        }
    };

    // Função de validação para o campo "RG"
    const validateRg = () => {
        if (!editedPolicial.rg) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                rg: 'O RG do Policial é obrigatório.',
            }));
        } else {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                rg: '',
            }));
        }
    };

    // Função de validação para o campo "Data Nascimento"
    const validateDataNascimento = () => {
        if (!editedPolicial.dataNascimento) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                dataNascimento: 'O Data Nascimento do Policial é obrigatório.',
            }));
        } else {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                dataNascimento: '',
            }));
        }
    };

    // Função de validação para o campo "Data Nascimento"
    const validateTelefone = () => {
        if (!editedPolicial.telefone) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                telefone: 'O Telefone do Policial é obrigatório.',
            }));
        } else {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                telefone: '',
            }));
        }
    };

    // const handleSave = async () => {
    //     try {
    //         // Realize a requisição PUT para a rota da API para editar o Policial
    //         const response = await fetch('http://localhost:8080/policial/editar', {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(editedPolicial),
    //         });

    //         if (response.ok) {
    //             // Se a requisição for bem-sucedida, chame a função onSave para atualizar o marca no estado pai
    //             onSave(editedPolicial);
    //             onClose();
    //             window.location.reload();
    //         } else {
    //             // Trate os erros da API, se necessário
    //             console.error('Erro ao editar Policial');
    //         }
    //     } catch (error) {
    //         // Trate erros de rede ou outros erros aqui
    //         console.error('Erro ao editar Policial:', error);
    //     }
    // };

    const handleSave = async () => {
        // Validar os campos antes de tentar salvar
        validateNome();
        validateCpf();
        validateRg();
        validateDataNascimento();
        validateTelefone();

        // Verificar se há erros de validação
        if (
            validationErrors.nome ||
            validationErrors.cpf ||
            validationErrors.rg ||
            validationErrors.dataNascimento ||
            validationErrors.telefone
        ) {
            return; // Impedir que o salvamento continue se houver erros
        }

        try {
            // Realize a requisição PUT para a rota da API para editar o Policial
            const response = await fetch('http://localhost:8080/policial/editar', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedPolicial),
            });

            if (response.ok) {
                // Se a requisição for bem-sucedida, chame a função onSave para atualizar o marca no estado pai
                onSave(editedPolicial);
                onClose();
                window.location.reload();
            } else {
                // Trate os erros da API, se necessário
                console.error('Erro ao editar Policial');
            }
        } catch (error) {
            // Trate erros de rede ou outros erros aqui
            console.error('Erro ao editar Policial:', error);
        }
    };

    return (
        <ModalWrapper>
            <ModalContent>
                <h2>Editar Policial</h2>
                <label>Nome da Policial:</label>
                <input
                    type="text"
                    name="nome"
                    value={editedPolicial.nome}
                    onChange={handleInputChange}
                    onBlur={validateNome} // Validar ao perder o foco
                />
                <ContainerInput>
                    <PolicialCpf>
                        CPF:

                        {/* <input
                            type="text"
                            name="cpf"
                            value={editedPolicial.cpf}
                            onChange={handleInputChange}
                            onBlur={validateCpf} // Validar ao perder o foco
                        /> */}

                        <InputMask
                            mask="999.999.999-99" // Defina a máscara do CPF
                            type="text"
                            name="cpf"
                            id="cpf"
                            placeholder="Digite o CPF"
                            onChange={handleInputChange}
                            value={editedPolicial.cpf}
                            onBlur={validateCpf} // Validar ao perder o foco
                        />

                    </PolicialCpf>

                    <PolicialRg>
                        RG:
                        <input
                            type="text"
                            name="rg"
                            value={editedPolicial.rg}
                            onChange={handleInputChange}
                            onBlur={validateRg} // Validar ao perder o foco
                        />
                    </PolicialRg>

                </ContainerInput>

                <ContainerInput>

                    <PolicialDataNascimento>
                        Data Nascimento:
                        <input
                            type="date"
                            name="dataNascimento"
                            value={editedPolicial.dataNascimento}
                            onChange={handleInputChange}
                            onBlur={validateDataNascimento} // Validar ao perder o foco
                        />
                    </PolicialDataNascimento>

                    <PolicialTelefone>
                        Telefone:
                        <input
                            type="text"
                            name="telefone"
                            value={editedPolicial.telefone}
                            onChange={handleInputChange}
                            onBlur={validateTelefone} // Validar ao perder o foco
                        />
                    </PolicialTelefone>

                </ContainerInput>

                <ContainerButton>
                    <button onClick={handleSave} disabled={!isDirty}>Salvar</button>
                    <button onClick={onClose}>Cancelar</button>
                </ContainerButton>
            </ModalContent>
        </ModalWrapper>
    );
}

export default ModalEditarPolicial;
