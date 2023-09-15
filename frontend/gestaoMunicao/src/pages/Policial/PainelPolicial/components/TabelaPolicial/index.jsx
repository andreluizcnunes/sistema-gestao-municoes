import { CTabela } from "./TabelaPolicial.styled"

function TabelaPolicial({ vetor }){
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
                                <button>
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