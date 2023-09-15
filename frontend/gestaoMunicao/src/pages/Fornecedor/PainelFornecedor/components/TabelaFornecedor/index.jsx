import { CTabela } from "./TabelaFornecedor.styled"

function TabelaFonecedor({ vetor }) {
    return (
        <CTabela>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Razão Social</th>
                    <th>Cnpj</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    vetor.slice(0, 5).map((obj, indice) => (
                        <tr key={indice}>
                            <td>{indice + 1}</td>
                            <td>{obj.razaoSocial}</td>
                            <td>{obj.cnpj}</td>
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

export default TabelaFonecedor;