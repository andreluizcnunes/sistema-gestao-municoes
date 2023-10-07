<a href="../documentacaoAPI.md">
    <button>Voltar</button>
</a>
<br>
<br>

# Documentação da API

Esta documentação descreve os endpoints da API fornecida pela aplicação. A API permite gerenciar usuários e realizar operações relacionadas a eles.

## Endpoints da API

### Listar Todos os Usuários

Este endpoint retorna uma lista de todos os usuários cadastrados no sistema.

- **Método:** GET
- **URL:** `/users/lista`
- **Resposta de Sucesso (200 OK):** Retorna uma lista de objetos JSON, onde cada objeto representa um usuário no sistema.

    Exemplo de Resposta de Sucesso:
    ```json
    [
        {
            "id": 1,
            "nome": "Nome do Usuário",
            "email": "usuario@email.com",
            "senha": "123456789"
        },
        // Outros usuários
    ]
    ```

### Consultar Usuários por Nome

Este endpoint permite consultar usuários por nome.

- **Método:** GET
- **URL:** `/users/consultar`
- **Parâmetros de Consulta:**
    - `nome` (String): O nome do usuário a ser consultado.
- **Resposta de Sucesso (200 OK):** Retorna uma lista de objetos JSON, onde cada objeto representa um usuário cujo nome corresponde ao nome especificado na consulta.

    Exemplo de Resposta de Sucesso:
    ```json
    [
        {
            "id": 1,
            "nome": "Nome do Usuário",
            "email": "usuario@email.com",
            "senha": "123456789"
        },
        // Outros usuários com o mesmo nome
    ]
    ```

### Cadastrar Novo Usuário

Este endpoint permite cadastrar um novo usuário no sistema.

- **Método:** POST
- **URL:** `/users/cadastrar`
- **Corpo da Requisição:** Um objeto JSON que representa os detalhes do novo usuário a ser cadastrado.

    Exemplo de Corpo da Requisição:
    ```json
    {
        "nome": "Novo Usuário",
        "email": "novousuario@email.com",
        "senha": "senha123"
    }
    ```
- **Resposta de Sucesso (201 Created):** Retorna uma mensagem indicando que o usuário foi cadastrado com sucesso.

    Exemplo de Resposta de Sucesso:
    ```
    Usuário cadastrado com sucesso.
    ```

### Editar Usuário

Este endpoint permite editar informações de um usuário existente no sistema.

- **Método:** PUT
- **URL:** `/users/editar`
- **Corpo da Requisição:** Um objeto JSON que representa as atualizações a serem aplicadas ao usuário existente.

    Exemplo de Corpo da Requisição:
    ```json
    {
        "id": 1,
        "nome": "Novo Nome do Usuário",
        "email": "novousuario@email.com",
        "senha": "senha123"
    }
    ```
- **Resposta de Sucesso (200 OK):** Retorna uma mensagem indicando que as informações do usuário foram atualizadas com sucesso.

    Exemplo de Resposta de Sucesso:
    ```
    Informações do usuário atualizadas com sucesso.
    ```

### Deletar Usuário

Este endpoint permite excluir um usuário do sistema com base em seu ID.

- **Método:** DELETE
- **URL:** `/users/deletar/{id}`
- **Parâmetros de Caminho:** `id` (Long): O ID do usuário a ser excluído.
- **Resposta de Sucesso (200 OK):** Retorna uma mensagem indicando que o usuário foi excluído com sucesso.

    Exemplo de Resposta de Sucesso:
    ```
    Usuário excluído com sucesso.
    ```

### Autenticar Usuário

Este endpoint permite autenticar um usuário com base em suas credenciais (email e senha).

- **Método:** POST
- **URL:** `/users/login`
- **Corpo da Requisição:** Um objeto JSON que contém as credenciais do usuário.

    Exemplo de Corpo da Requisição:
    ```json
    {
        "email": "usuario@email.com",
        "senha": "senha123"
    }
    ```
- **Resposta de Sucesso (200 OK):** Retorna uma mensagem indicando que o usuário foi autenticado com sucesso.

    Exemplo de Resposta de Sucesso:
    ```
    Usuário autenticado com sucesso.
    ```

- **Resposta de Falha (401 Unauthorized):** Retorna uma mensagem indicando que as credenciais do usuário são inválidas.

    Exemplo de Resposta de Falha:
    ```
    Usuário ou senha estão inválidos.
    ```

Certifique-se de que a API esteja configurada corretamente para lidar com todas essas operações e de que as respostas de erro incluam informações úteis para o cliente entender o motivo da falha.
