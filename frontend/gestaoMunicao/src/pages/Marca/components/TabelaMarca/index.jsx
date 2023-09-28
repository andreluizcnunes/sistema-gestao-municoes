import { useEffect, useState } from "react";

import { 
    CTabela, 
    GroupButton, 
    ButtonEdit, 
    ButtonDelete } from "./TabelaMarca.styled"

import ModalEditarMarca from "../ModelEditarMarca"

function TabelaMarca({ vetor }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMarca, setSelectedMarca] = useState(null);

    useEffect(() => {
        
        if(isModalOpen === true){
            document.body.style.overflow = 'hidden';
        }else{
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
                                        <ButtonDelete onClick={() => { remover(obj.id) }}>
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
        </>
    );
}

export default TabelaMarca;