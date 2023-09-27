import { useEffect, useState } from "react";

import { CTabela, GroupButton, ButtonEdit, ButtonDelete } from "./TabelaUsuario.styled"

import ModalEditarUsuario from "../ModalEditarUsuario";
import AlertDialogDelete from "../../../../components/AlertDialogDelete";


function TabelaUsuario({ vetor }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUsuario, setSelectedUsuario] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false); // Novo estado para controlar o alerta

    const openModal = (usuario) => {
        setSelectedUsuario(usuario);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedUsuario(null);
        setIsModalOpen(false);
    };

    const handleEditSave = (editedUsuario) => {
        // Faça a lógica para salvar as informações editadas do fornecedor aqui
        closeModal();
    };

    const handleDeleteCancel = () => {
        // Feche o alerta de confirmação
        setShowConfirmation(false);
    };

    const handleDeleteClick = (usuario) => {
        // Exiba o alerta de confirmação quando o botão "Deletar" for clicado
        setShowConfirmation(true);
        setSelectedUsuario(usuario);
    };

    useEffect(() => {
        
        if(isModalOpen === true || showConfirmation === true){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }

    }, [isModalOpen, showConfirmation])

    const handleDeleteConfirmation = () => {
        // Faça a lógica de exclusão após a confirmação
        const indice = selectedUsuario.id; // Suponho que o ID esteja em selectedUsuario.id

        fetch(`http://localhost:8080/users/deletar/${indice}`, {
            method: 'delete',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(retorno => retorno.json())
        .then(() => {
            window.location.reload();
        });
        
        // Feche o alerta de confirmação após a exclusão
        setShowConfirmation(false);
    };

    return (
        <>
            <CTabela>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vetor.slice(0, 10).map((obj, indice) => (
                            <tr key={indice}>
                                <td>{indice + 1}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.email}</td>
                                <td>
                                    <GroupButton>
                                        <ButtonEdit onClick={() => openModal(obj)}>
                                            Editar
                                        </ButtonEdit>
                                        <ButtonDelete onClick={() => handleDeleteClick(obj)}>
                                            Deletar
                                        </ButtonDelete>
                                    </GroupButton>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </CTabela>
            {isModalOpen && (
                <ModalEditarUsuario
                    usuario={selectedUsuario}
                    onClose={closeModal}
                    onSave={handleEditSave}
                />
            )}

            {showConfirmation && (
                <AlertDialogDelete
                    message={"Você tem certeza que deseja deletar o usuário?"}
                    obj={selectedUsuario.nome}
                    onCancel={handleDeleteCancel}
                    onConfirm={handleDeleteConfirmation}
                />
            )}
        </>
    );
}

export default TabelaUsuario;