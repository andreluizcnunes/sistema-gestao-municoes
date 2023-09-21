import React, { useState } from 'react';

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedPolicial({ ...editedPolicial, [name]: value });
    };

    const handleSave = async () => {
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
                />
                <ContainerInput>
                    <PolicialCpf>
                        CPF:

                        <input
                            type="text"
                            name="nome"
                            value={editedPolicial.cpf}
                            onChange={handleInputChange}
                        />

                    </PolicialCpf>

                    <PolicialRg>
                        RG:
                        <input
                            type="text"
                            name="nome"
                            value={editedPolicial.rg}
                            onChange={handleInputChange}
                        />
                    </PolicialRg>

                </ContainerInput>

                <ContainerInput>

                    <PolicialDataNascimento>
                        Data Nascimento:
                        <input
                            type="date"
                            name="nome"
                            value={editedPolicial.dataNascimento}
                            onChange={handleInputChange}
                        />
                    </PolicialDataNascimento>

                    <PolicialTelefone>
                        Telefone:
                        <input
                            type="text"
                            name="nome"
                            value={editedPolicial.telefone}
                            onChange={handleInputChange}
                        />
                    </PolicialTelefone>

                </ContainerInput>

                <ContainerButton>
                    <button onClick={handleSave}>Salvar</button>
                    <button onClick={onClose}>Cancelar</button>
                </ContainerButton>
            </ModalContent>
        </ModalWrapper>
    );
}

export default ModalEditarPolicial;
