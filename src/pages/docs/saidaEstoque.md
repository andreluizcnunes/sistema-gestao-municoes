<a href="../documentacaoAPI.md">
    <button>Voltar</button>
</a>
<br>
<br>


# Documentação da API

Esta documentação descreve os endpoints da API fornecidos pelo controlador `Saida Municao`. A API permite gerenciar o estoque de saída de munição e realizar operações relacionadas a ele.

## Endpoints da API

### Registrar Saída de Munição

Este endpoint permite registrar a saída de munição do estoque.

- **Método:** POST
- **URL:** `/estoquesaida/saida`
- **Corpo da Requisição:** Um objeto JSON que representa os detalhes da saída de munição.

    Exemplo de Corpo da Requisição:
    ```json
    {
        "id": 1,
        "quantidade": 100,
        "dataSaida": "2023-10-10",
        // Outros campos relacionados à saída de munição
    }
    ```

- **Resposta de Sucesso (200 OK):** Retorna uma mensagem indicando que o estoque de munição foi atualizado com sucesso.

    Exemplo de Resposta de Sucesso:
    ```
    Estoque de munição atualizado com sucesso.
    ```

- **Resposta de Falha (500 Internal Server Error):** Retorna uma mensagem de erro se ocorrer algum problema ao atualizar o estoque de munição.

    Exemplo de Resposta de Falha:
    ```
    Erro ao atualizar o estoque de munição: mensagem de erro.
    ```

### Contar Total de Saídas de Munição

Este endpoint permite contar o total de saídas de munição registradas no sistema.

- **Método:** GET
- **URL:** `/estoquesaida/total`
- **Resposta de Sucesso (200 OK):** Retorna o total de saídas de munição registrado no sistema como um valor numérico.

    Exemplo de Resposta de Sucesso:
    ```
    50
    ```

Certifique-se de que a API esteja configurada corretamente para lidar com todas essas operações e de que as respostas de erro incluam informações úteis para o cliente entender o motivo da falha. Além disso, adapte os exemplos de JSON e as mensagens de resposta de acordo com a estrutura real da sua aplicação.
