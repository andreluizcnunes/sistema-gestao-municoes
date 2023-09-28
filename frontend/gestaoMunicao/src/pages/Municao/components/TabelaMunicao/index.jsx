import { useEffect, useState } from "react";

import { CTabela, GroupButton, ButtonEdit, ButtonDelete } from "./TabelaMunicao.styled"

import ModalEditarMunicao from "../ModalEditarMunicao"
import AlertDialogDelete from "../../../../components/AlertDialogDelete";

function TabelaMunicao({ vetor }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMunicao, setSelectedMunicao] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false); // Novo estado para controlar o alerta

    useEffect(() => {

        if (isModalOpen === true) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

    }, [isModalOpen, showConfirmation])

    const openModal = (municao) => {
        setSelectedMunicao(municao);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedMunicao(null);
        setIsModalOpen(false);
    };

    const handleEditSave = () => {
        closeModal();
    };

    const handleDeleteCancel = () => {
        // Feche o alerta de confirmação
        setShowConfirmation(false);
    };

    const handleDeleteClick = (municao) => {
        // Exiba o alerta de confirmação quando o botão "Deletar" for clicado
        setShowConfirmation(true);
        setSelectedMunicao(municao);
    };

    const handleDeleteConfirmation = () => {
        // Faça a lógica de exclusão após a confirmação
        const indice = selectedMunicao.id;// Suponho que o ID esteja em selectedUsuario.id

        fetch(`http://localhost:8080/municao/deletar/${indice}`, {
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
                        <th>Calibre</th>
                        <th>Quantidade</th>
                        <th>Marca</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vetor.slice(0, 10).map((obj, indice) => (
                            <tr key={indice}>
                                <td>{indice + 1}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.calibre}</td>
                                <td>{obj.quantidade}</td>
                                <td>{obj.marca}</td>
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
                <ModalEditarMunicao
                    marca={selectedMunicao}
                    onClose={closeModal}
                    onSave={handleEditSave}
                />
            )}
            {showConfirmation && (
                <AlertDialogDelete
                    message={"Você tem certeza que deseja deletar a Munição?"}
                    obj={selectedMunicao.nome}
                    onCancel={handleDeleteCancel}
                    onConfirm={handleDeleteConfirmation}
                />
            )}
        </>
    );
}

export default TabelaMunicao;