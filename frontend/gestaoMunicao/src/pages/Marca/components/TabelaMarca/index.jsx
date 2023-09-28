import { useEffect, useState } from "react";

import {
    CTabela,
    GroupButton,
    ButtonEdit,
    ButtonDelete
} from "./TabelaMarca.styled"

import ModalEditarMarca from "../ModelEditarMarca"
import AlertDialogDelete from "../../../../components/AlertDialogDelete";

function TabelaMarca({ vetor }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMarca, setSelectedMarca] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false); // Novo estado para controlar o alerta

    useEffect(() => {

        if (isModalOpen === true) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

    }, [isModalOpen])

    const openModal = (marca) => {
        setSelectedMarca(marca);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedMarca(null);
        setIsModalOpen(false);
    };

    const handleEditSave = (editedMarca) => {
        // Faça a lógica para salvar as informações editadas do fornecedor aqui
        closeModal();
    };

    const handleDeleteCancel = () => {
        // Feche o alerta de confirmação
        setShowConfirmation(false);
    };

    const handleDeleteClick = (marca) => {
        // Exiba o alerta de confirmação quando o botão "Deletar" for clicado
        setShowConfirmation(true);
        setSelectedMarca(marca);
    };

    useEffect(() => {

        if (isModalOpen === true || showConfirmation === true) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

    }, [isModalOpen, showConfirmation])


    const handleDeleteConfirmation = () => {

        // Faça a lógica de exclusão após a confirmação
        const indice = selectedMarca.id; // Suponho que o ID esteja em selectedUsuario.id

        fetch(`http://localhost:8080/marca/deletar/${indice}`, {
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
    }

    return (
        <>
            <CTabela>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vetor.map((obj, indice) => (
                            <tr key={indice}>
                                <td>{indice + 1}</td>
                                <td>{obj.nome}</td>
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
                <ModalEditarMarca
                    marca={selectedMarca}
                    onClose={closeModal}
                    onSave={handleEditSave}
                />
            )}

            {showConfirmation && (
                <AlertDialogDelete
                    message={"Você tem certeza que deseja deletar o usuário?"}
                    obj={selectedMarca.nome}
                    onCancel={handleDeleteCancel}
                    onConfirm={handleDeleteConfirmation}
                />
            )}
        </>
    );
}

export default TabelaMarca;