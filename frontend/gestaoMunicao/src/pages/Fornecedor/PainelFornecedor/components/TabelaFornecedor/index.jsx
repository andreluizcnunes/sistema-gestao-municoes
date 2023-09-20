import { CTabela } from "./TabelaFornecedor.styled"

import ModalEditarFornecedor from "../../../components/ModalEditarFornecedor"
import { useState } from "react";

function TabelaFonecedor({ vetor }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFornecedor, setSelectedFornecedor] = useState(null);

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
        console.log("Fornecedor editado:", editedFornecedor);
        closeModal();
    };


    const remover = (indice) => {
        fetch(`http://localhost:8080/fornecedor/deletar/${indice}`, {
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
                        <th colSpan="5">
                            Fornecedores Recentes
                        </th>
                    </tr>
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
                        vetor.map((obj, indice) => (
                            <tr key={indice}>
                                <td>{indice + 1}</td>
                                <td>{obj.razaoSocial}</td>
                                <td>{obj.cnpj}</td>
                                <td>{obj.inscricao}</td>
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
                <ModalEditarFornecedor
                    fornecedor={selectedFornecedor}
                    onClose={closeModal}
                    onSave={handleEditSave}
                />
            )}
        </>
    );
}

export default TabelaFonecedor;