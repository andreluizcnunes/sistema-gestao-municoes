import { useState } from "react";

import { CTabela } from "./TabelaUsuario.styled"

import ModalEditarUsuario from "../ModalEditarUsuario";

function TabelaUsuario({ vetor }){

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUsuario, setSelectedUsuario] = useState(null);

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
        console.log("Usuario editado:", editedUsuario);
        closeModal();
    };

    const remover = (indice) => {
        fetch(`http://localhost:8080/users/deletar/${indice}`, {
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

    return(
        <>
            <CTabela>
                <thead>
                    <tr>
                        <th colSpan="4">
                            Cadastros Recentes
                        </th>
                    </tr>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vetor.map((obj, indice) => (
                            <tr key={indice}>
                                <td>{indice + 1}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.email}</td>
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
                <ModalEditarUsuario
                    usuario={selectedUsuario}
                    onClose={closeModal}
                    onSave={handleEditSave}
                />
            )}
        </>
    );
}

export default TabelaUsuario;