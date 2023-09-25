import { useEffect, useState } from "react";

import { CTabela } from "./TabelaMunicao.styled"

import ModalEditarMunicao from "../ModalEditarMunicao"

function TabelaMunicao({ vetor }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMunicao, setSelectedMunicao] = useState(null);

    useEffect(() => {
        
        if(isModalOpen === true){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }

    }, [isModalOpen])

    const openModal = (marca) => {
        setSelectedMunicao(marca);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedMunicao(null);
        setIsModalOpen(false);
    };

    const handleEditSave = (editedMunicao) => {
        // Faça a lógica para salvar as informações editadas do fornecedor aqui
        console.log("Marca editado:", editedMunicao);
        closeModal();
    };


    const remover = (indice) => {
        fetch(`http://localhost:8080/municao/deletar/${indice}`, {
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
                        <th colSpan="6">
                            Tabela de Munições
                        </th>
                    </tr>
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
                        vetor.map((obj, indice) => (
                            <tr key={indice}>
                                <td>{indice + 1}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.calibre}</td>
                                <td>{obj.quantidade}</td>
                                <td>{obj.marca}</td>
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
                <ModalEditarMunicao
                    marca={selectedMunicao}
                    onClose={closeModal}
                    onSave={handleEditSave}
                />
            )}
        </>
    );
}

export default TabelaMunicao;