<a href="../documentacaoAPI.md">
    <button>Voltar</button>
</a>
<br>
<br>

# Documentação da API

Esta documentação descreve os endpoints da API fornecidos pelo controlador `Policial`. A API permite gerenciar informações sobre policiais e realizar operações relacionadas a eles.

## Endpoints da API

### Listar Todos os Policiais

Este endpoint retorna uma lista de todos os policiais cadastrados no sistema.

- **Método:** GET
- **URL:** `/policial/lista`
- **Resposta de Sucesso (200 OK):** Retorna uma lista de objetos JSON, onde cada objeto representa um policial no sistema.

    Exemplo de Resposta de Sucesso:
    ```json
    [
        {
            "id": 1,
            "nome": "Nome do Policial",
            "matricula": "12345",
            // Outros campos relacionados ao policial
        },
        // Outros policiais
    ]
    ```

### Listar Todos os Policiais como DTO

Este endpoint retorna uma lista de todos os policiais cadastrados no sistema, mas representados como objetos DTO (Data Transfer Object).

- **Método:** GET
- **URL:** `/policial/listarDTO`
- **Resposta de Sucesso (200 OK):** Retorna uma lista de objetos JSON, onde cada objeto representa um policial no sistema no formato DTO.

    Exemplo de Resposta de Sucesso:
    ```json
    [
        {
            "id": 1,
            "nome": "Nome do Policial",
            "matricula": "12345",
            // Outros campos relacionados ao policial
        },
        // Outros policiais no formato DTO
    ]
    ```

### Consultar Policiais por Nome

Este endpoint permite consultar policiais por nome.

- **Método:** GET
- **URL:** `/policial/consultar`
- **Parâmetros de Consulta:**
    - `nome` (String): O nome do policial a ser consultado.
- **Resposta de Sucesso (200 OK):** Retorna uma lista de objetos JSON, onde cada objeto representa um policial cujo nome corresponde ao nome especificado na consulta.

    Exemplo de Resposta de Sucesso:
    ```json
    [
        {
            "id": 1,
            "nome": "Nome do Policial",
            "matricula": "12345",
            // Outros campos relacionados ao policial
        },
        // Outros policiais com o mesmo nome
    ]
    ```

### Cadastrar Novo Policial

Este endpoint permite cadastrar um novo policial no sistema.

- **Método:** POST
- **URL:** `/policial/cadastrar`
- **Corpo da Requisição:** Um objeto JSON que representa os detalhes do novo policial a ser cadastrado.

    Exemplo de Corpo da Requisição:
    ```json
    {
        "nome": "Novo Policial",
        "matricula": "54321",
        // Outros campos relacionados ao policial
    }
    ```

- **Resposta de Sucesso (200 OK):** Retorna uma mensagem indicando que o policial foi cadastrado com sucesso.

    Exemplo de Resposta de Sucesso:
    ```
    Policial cadastrado com sucesso.
    ```

### Editar Policial

Este endpoint permite editar informações de um policial existente no sistema.

- **Método:** PUT
- **URL:** `/policial/editar`
- **Corpo da Requisição:** Um objeto JSON que representa as atualizações a serem aplicadas ao policial existente.

    Exemplo de Corpo da Requisição:
    ```json
    {
        "id": 1,
        "nome": "Novo Nome do Policial",
        // Outros campos a serem atualizados
    }
    ```

- **Resposta de Sucesso (200 OK):** Retorna uma mensagem indicando que as informações do policial foram atualizadas com sucesso.

    Exemplo de Resposta de Sucesso:
    ```
    Informações do policial atualizadas com sucesso.
    ```

### Deletar Policial por ID

Este endpoint permite excluir um policial do sistema com base em seu ID.

- **Método:** DELETE
- **URL:** `/policial/deletar/{id}`
- **Parâmetros de Caminho:** `id` (Long): O ID do policial a ser excluído.
- **Resposta de Sucesso (200 OK):** Retorna uma mensagem indicando que o policial foi excluído com sucesso.

    Exemplo de Resposta de Sucesso:
    ```
    Policial excluído com sucesso.
    ```

Certifique-se de que a API esteja configurada corretamente para lidar com todas essas operações e de que as respostas de erro incluam informações úteis para o cliente entender o motivo da falha. Além disso, adapte os exemplos de JSON e as mensagens de resposta de acordo com a estrutura real da sua aplicação.
