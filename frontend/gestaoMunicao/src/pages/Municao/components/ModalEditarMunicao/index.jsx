import React, { useEffect, useState } from 'react';

import {
    ModalWrapper,
    ModalContent,
    ContainerButton,
    Marca
} from "./ModalEditarMunicao.styled";

function ModalEditarMunicao({ municao, onClose, onSave }) {

    const [editedMunicao, setEditedMunicao] = useState(municao);
    const [marcas, setMarcas] = useState([]);
    const [idMarcaSelecionada, setIdMarcaSelecionada] = useState('');
    const [isDirty, setIsDirty] = useState(false);

    // Estados para rastrear erros de validação
    const [validationErrors, setValidationErrors] = useState({
        nome: '',
        calibre: '',
        marca: {
            id: 0
        }
    });

    useEffect(() => {
        // Verifique se o objeto 'editedUsuario' é diferente do objeto 'usuario' original
        const isEdited = JSON.stringify(editedMunicao) !== JSON.stringify(municao);
        setIsDirty(isEdited);
    }, [editedMunicao, municao]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // setEditedPolicial({ ...editedPolicial, [name]: value });
        setEditedMunicao((prevEditedMunicao) => ({
            ...prevEditedMunicao,
            [name]: value,
        }));
    };

    // Função de validação para o campo "Nome do Policial"
    const validateNome = () => {
        if (!editedMunicao.nome) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                nome: 'O nome da Munição é obrigatório.',
            }));
        } else {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                nome: '',
            }));
        }
    };

    // Função de validação para o campo "Nome do Policial"
    const validateCalibre = () => {
        if (!editedMunicao.calibre) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                calibre: 'O calibre é obrigatório.',
            }));
        } else {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                calibre: '',
            }));
        }
    };

    useEffect(() => {
        fetch("http://localhost:8080/marca/listar")
            .then(retorno => retorno.json())
            .then(retornoConvertido => setMarcas(retornoConvertido));
    }, []);

    const handleSave = async () => {
        // Validar os campos antes de tentar salvar
        validateNome();
        validateCalibre();
    
        // Verificar se há erros de validação
        if (
            validationErrors.nome ||
            validationErrors.calibre
        ) {
            return; // Impedir que o salvamento continue se houver erros
        }
    
        try {
            const editedMunicaoToSend = {
                ...editedMunicao,
                marca: {
                    id: idMarcaSelecionada
                }, // Usar o ID da marca selecionada
            };
    
            const response = await fetch('http://localhost:8080/municao/editar', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedMunicaoToSend),
            });
    
            if (response.ok) {
                // Se a requisição for bem-sucedida, chame a função onSave para atualizar a munição no estado pai
                onSave(editedMunicaoToSend);
                onClose();
                window.location.reload();
            } else {
                // Trate os erros da API, se necessário
                console.error('Erro ao editar Munição');
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
                    onBlur={validateNome} // Validar ao perder o foco
                />

                <label>Calibre:</label>
                <input
                    type="text"
                    name="calibre"
                    value={editedMunicao.calibre}
                    onChange={handleInputChange}
                    onBlur={validateCalibre} // Validar ao perder o foco
                />

                <Marca>
                    <p>
                        Marca: <span>(Campo Obrigatório)</span>
                    </p>
                    <select
                        name="marca"
                        value={idMarcaSelecionada}
                        onChange={(e) => setIdMarcaSelecionada(e.target.value)}
                    // onBlur={validateMarca} // Validar ao perder o foco
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
                    <button onClick={handleSave} disabled={!isDirty}>Salvar</button>
                    <button onClick={onClose}>Cancelar</button>
                </ContainerButton>
            </ModalContent>
        </ModalWrapper>
    );
}

export default ModalEditarMunicao;
