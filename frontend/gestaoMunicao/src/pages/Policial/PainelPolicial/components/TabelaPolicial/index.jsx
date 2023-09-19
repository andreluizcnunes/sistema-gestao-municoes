import { CTabela } from "./TabelaPolicial.styled"

function TabelaPolicial({ vetor }){

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

    return(
        <CTabela>
            <thead>
                <tr>
                    <th colSpan="5">
                        Cadastros Recentes
                    </th>
                </tr>
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
                    vetor.slice().reverse().slice(0, 6).map((obj, indice) => (
                        <tr key={indice}>
                            <td>{indice + 1}</td>
                            <td>{obj.nome}</td>
                            <td>{obj.cpf}</td>
                            <td>{obj.telefone}</td>
                            <td>
                                <button>
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
    );
}

export default TabelaPolicial;