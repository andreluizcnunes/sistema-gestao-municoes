import { useEffect, useState } from "react";

import { CTabela, GroupButton, ButtonEdit, ButtonDelete } from "./TabelaFornecedor.styled"

import ModalEditarFornecedor from "../ModalEditarFornecedor"
import AlertDialogDelete from "../../../../components/AlertDialogDelete";

function TabelaFonecedor({ vetor }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFornecedor, setSelectedFornecedor] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false); // Novo estado para controlar o alerta


    const openModal = (fornecedor) => {
        setSelectedFornecedor(fornecedor);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedFornecedor(null);
        setIsModalOpen(false);
    };

    const handleEditSave = (editedFornecedor) => {
        // Faça a lógica para salvar as informações editadas do fornecedor aqui
        closeModal();
    };

    const handleDeleteCancel = () => {
        // Feche o alerta de confirmação
        setShowConfirmation(false);
    };

    const handleDeleteClick = (fornecedor) => {
        // Exiba o alerta de confirmação quando o botão "Deletar" for clicado
        setShowConfirmation(true);
        setSelectedFornecedor(fornecedor);
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
        const indice = selectedFornecedor.id; // Suponho que o ID esteja em selectedUsuario.id

        fetch(`http://localhost:8080/fornecedor/deletar/${indice}`, {
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
                        <th>Razão Social</th>
                        <th>Cnpj</th>
                        <th>Inscrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vetor.slice(0, 10).map((obj, indice) => (
                            <tr key={indice}>
                                <td>{indice + 1}</td>
                                <td>{obj.razaoSocial}</td>
                                <td>{obj.cnpj}</td>
                                <td>{obj.inscricao}</td>
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
                <ModalEditarFornecedor
                    fornecedor={selectedFornecedor}
                    onClose={closeModal}
                    onSave={handleEditSave}
                />
            )}

            {showConfirmation && (
                <AlertDialogDelete
                    message={"Você tem certeza que deseja deletar o Fornecedor?"}
                    obj={selectedFornecedor.razaoSocial}
                    onCancel={handleDeleteCancel}
                    onConfirm={handleDeleteConfirmation}
                />
            )}
        </>
    );
}

export default TabelaFonecedor;