import { CTabela } from "./TabelaMarca.styled"

function TabelaMarca({ vetor }) {
    return (
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
                    vetor.slice().reverse().slice(0, 6).map((obj, indice) => (
                        <tr key={indice}>
                            <td>{indice + 1}</td>
                            <td>{obj.nome}</td>
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

export default TabelaMarca;