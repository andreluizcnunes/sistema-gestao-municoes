import { useEffect, useState } from "react";

import { CTabela, GroupButton, ButtonEdit, ButtonDelete } from "./TabelaPolicial.styled"

import ModalEditarPolicial from "../ModalEditarPolicial";
import AlertDialogDelete from "../../../../components/AlertDialogDelete";

function TabelaPolicial({ vetor }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPolicial, setSelectedPolicial] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false); // Novo estado para controlar o alerta

    const openModal = (policial) => {
        setSelectedPolicial(policial);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedPolicial(null);
        setIsModalOpen(false);
    };

    const handleEditSave = () => {
        // Faça a lógica para salvar as informações editadas do fornecedor aqui
        closeModal();
    };

    const handleDeleteCancel = () => {
        // Feche o alerta de confirmação
        setShowConfirmation(false);
    };

    const handleDeleteClick = (policial) => {
        // Exiba o alerta de confirmação quando o botão "Deletar" for clicado
        setShowConfirmation(true);
        setSelectedPolicial(policial);
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
        const indice = selectedPolicial.id; // Suponho que o ID esteja em selectedUsuario.id

        fetch(`http://localhost:8080/policial/deletar/${indice}`, {
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
                        <th>CPF</th>
                        <th>Telefone</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vetor.slice(0, 10).map((obj, indice) => (
                            <tr key={indice}>
                                <td>{indice + 1}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.cpf}</td>
                                <td>{obj.telefone}</td>
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
                <ModalEditarPolicial
                    policial={selectedPolicial}
                    onClose={closeModal}
                    onSave={handleEditSave}
                />
            )}

            {showConfirmation && (
                <AlertDialogDelete
                    message={"Você tem certeza que deseja deletar o Policial?"}
                    obj={selectedPolicial.nome}
                    onCancel={handleDeleteCancel}
                    onConfirm={handleDeleteConfirmation}
                />
            )}
        </>
    );
}

export default TabelaPolicial;