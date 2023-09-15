import { CTabela } from "./TabelaFornecedor.styled"

function TabelaFonecedor({ vetor }) {
    return (
        <CTabela>
            <thead>
                <tr>
                    <th colSpan="4">
                        Fornecedores Recentes
                    </th>
                </tr>
                <tr>
                    <th>#</th>
                    <th>Razão Social</th>
                    <th>Cnpj</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    vetor.slice().reverse().slice(0, 6).map((obj, indice) => (
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