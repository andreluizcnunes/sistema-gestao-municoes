import { CTabela } from "./TabelaUsuario.styled"

function TabelaUsuario({ vetor }){
    return(
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
                    vetor.slice().reverse().slice(0, 6).map((obj, indice) => (
                        <tr key={indice}>
                            <td>{indice + 1}</td>
                            <td>{obj.nome}</td>
                            <td>{obj.email}</td>
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

export default TabelaUsuario;