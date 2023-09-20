import { CTabela } from "./TabelaMarca.styled"

import ModalEditarMarca from "../ModelEditarMarca"
import { useState } from "react";

function TabelaMarca({ vetor }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMarca, setSelectedMarca] = useState(null);

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
        console.log("Marca editado:", editedMarca);
        closeModal();
    };


    const remover = (indice) => {
        fetch(`http://localhost:8080/marca/deletar/${indice}`, {
            method: 'delete',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(retorno => retorno.json())
            .then(retorno_convertido => {

                // mensagem de sucesso
                alert("Removido com sucesso!");
            })
    }

    return (
        <>
            <CTabela>
                <thead>
                    <tr>
                        <th colSpan="4">
                            Marcas Recentes
                        </th>
                    </tr>
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
                                    <button onClick={() => openModal(obj)}>
                                        Editar
                                    </button>
                                    <button onClick={() => { remover(obj.id) }}>
                                        Deletar
                                    </button>
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
        </>
    );
}

export default TabelaMarca;