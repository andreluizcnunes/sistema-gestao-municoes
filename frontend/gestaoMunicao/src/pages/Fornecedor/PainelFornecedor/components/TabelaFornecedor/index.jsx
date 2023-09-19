import { CTabela } from "./TabelaFornecedor.styled"

function TabelaFonecedor({ vetor }) {

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
                    vetor.map((obj, indice) => (
                        <tr key={indice}>
                            <td>{indice + 1}</td>
                            <td>{obj.razaoSocial}</td>
                            <td>{obj.cnpj}</td>
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

export default TabelaFonecedor;