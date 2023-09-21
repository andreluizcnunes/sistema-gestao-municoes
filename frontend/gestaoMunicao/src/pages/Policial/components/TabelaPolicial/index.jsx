import { CTabela } from "./TabelaPolicial.styled"
import { useState } from "react";

import ModalEditarPolicial from "../ModalEditarPolicial";

function TabelaPolicial({ vetor }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPolicial, setSelectedPolicial] = useState(null);

    const openModal = (policial) => {
        setSelectedPolicial(policial);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedPolicial(null);
        setIsModalOpen(false);
    };

    const handleEditSave = (editedPolicial) => {
        // Faça a lógica para salvar as informações editadas do fornecedor aqui
        console.log("Policial editado:", editedPolicial);
        closeModal();
    };

    const remover = (indice) => {
        fetch(`http://localhost:8080/policial/deletar/${indice}`, {
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
                        <th colSpan="7">
                            Cadastros Recentes
                        </th>
                    </tr>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>RG</th>
                        <th>Data Nascimento</th>
                        <th>Telefone</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vetor.map((obj, indice) => (
                            <tr key={indice}>
                                <td>{indice + 1}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.cpf}</td>
                                <td>{obj.rg}</td>
                                <td>{obj.dataNascimento}</td>
                                <td>{obj.telefone}</td>
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
                <ModalEditarPolicial
                    policial={selectedPolicial}
                    onClose={closeModal}
                    onSave={handleEditSave}
                />
            )}
        </>
    );
}

export default TabelaPolicial;