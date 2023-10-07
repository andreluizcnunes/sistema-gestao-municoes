<a href="../documentacaoAPI.md">
    <button>Voltar</button>
</a>
<br>
<br>

# Endpoints da API de Fornecedor

A API de Fornecedor oferece operações relacionadas a fornecedores.

## Listar Todos os Fornecedores

### Endpoint:
```
GET /fornecedor/lista
```

Este endpoint retorna uma lista de todos os fornecedores cadastrados.

### Resposta:

- Código de Status: 200 OK
- Corpo da Resposta (Exemplo):
  ```json
  [
    {
      "id": 1,
      "razaoSocial": "Fornecedor A",
      "cnpj": "1234567890"
    },
    {
      "id": 2,
      "razaoSocial": "Fornecedor B",
      "cnpj": "0987654321"
    }
  ]
  ```

## Obter Fornecedor por ID

### Endpoint:
```
GET /fornecedor/lista/{id}
```

Este endpoint permite obter um fornecedor específico pelo seu ID.

### Parâmetros da Solicitação:

- `id` (Long, obrigatório): O ID do fornecedor a ser obtido.

### Resposta:

- Código de Status: 200 OK
- Corpo da Resposta (Exemplo):
  ```json
  {
    "id": 1,
    "razaoSocial": "Fornecedor A",
    "cnpj": "1234567890"
  }
  ```

## Consultar Fornecedor por Razão Social

### Endpoint:
```
GET /fornecedor/consultar/{razaoSocial}
```

Este endpoint permite consultar fornecedores pelo nome da razão social.

### Parâmetros da Solicitação:

- `razaoSocial` (String, obrigatório): A razão social do fornecedor a ser consultada.

### Resposta:

- Código de Status: 200 OK
- Corpo da Resposta (Exemplo):
  ```json
  [
    {
      "id": 1,
      "razaoSocial": "Fornecedor A",
      "cnpj": "1234567890"
    }
  ]
  ```

## Consultar Fornecedor por Razão Social (Versão Alternativa)

### Endpoint:
```
GET /fornecedor/consultar?razaoSocial={razaoSocial}
```

Este endpoint permite consultar fornecedores pelo nome da razão social usando um parâmetro de consulta.

### Parâmetros da Solicitação:

- `razaoSocial` (String, obrigatório): A razão social do fornecedor a ser consultada.

### Resposta:

- Código de Status: 200 OK
- Corpo da Resposta (Exemplo):
  ```json
  [
    {
      "id": 1,
      "razaoSocial": "Fornecedor A",
      "cnpj": "1234567890"
    }
  ]
  ```

## Consultar Fornecedor por Razão Social (Formato DTO)

### Endpoint:
```
GET /fornecedor/consultardto?razaoSocial={razaoSocial}
```

Este endpoint permite consultar fornecedores pelo nome da razão social usando um parâmetro de consulta e retornando no formato de DTO (Data Transfer Object).

### Parâmetros da Solicitação:

- `razaoSocial` (String, obrigatório): A razão social do fornecedor a ser consultada.

### Resposta:

- Código de Status: 200 OK
- Corpo da Resposta (Exemplo):
  ```json
  [
    {
      "id": 1,
      "razaoSocial": "Fornecedor A",
      "cnpj": "1234567890"
    }
  ]
  ```

## Cadastrar Novo Fornecedor

### Endpoint:
```
POST /fornecedor/cadastrardto
```

Este endpoint permite cadastrar um novo fornecedor usando um objeto FornecedorModel.

### Corpo da Solicitação (Exemplo):
```json
{
  "razaoSocial": "Fornecedor C",
  "cnpj": "9876543210"
}
```

### Respostas:

- Código de Status: 200 OK
- Corpo da Resposta (Exemplo):
  ```
  Fornecedor cadastrado com sucesso.
  ```

## Cadastrar Novo Fornecedor (Versão Alternativa)

### Endpoint:
```
POST /fornecedor/cadastrar
```

Este endpoint permite cadastrar um novo fornecedor usando um objeto FornecedorModel.

### Corpo da Solicitação (Exemplo):
```json
{
  "razaoSocial": "Fornecedor D",
  "cnpj": "5432109876"
}
```

### Resposta:

- Código de Status: 200 OK
- Corpo da Resposta (Exemplo):
  ```json
  {
    "id": 3,
    "razaoSocial": "Fornecedor D",
    "cnpj": "5432109876"
  }
  ```

## Editar Fornecedor Existente

### Endpoint:
```
PUT /fornecedor/editar
```

Este endpoint permite atualizar um fornecedor existente usando um objeto FornecedorModel.

### Corpo da Solicitação (Exemplo):
```json
{
  "id": 1,
  "razaoSocial": "Fornecedor A (Editado)",
  "cnpj": "1234567890"
}
```

### Respostas:

- Código de Status: 200 OK
- Corpo da Resposta (Exemplo):
  ```
  Fornecedor editado com sucesso.
  ```

- Código de Status: 404 Not Found
- Corpo da Resposta (Exemplo):
  ```
  Fornecedor não encontrado com o ID fornecido.
  ```

## Deletar Fornecedor por ID

### Endpoint:
```
DELETE /fornecedor/deletar/{id}
```

Este endpoint permite deletar um fornecedor pelo seu ID.

### Parâmetros da Solicitação:

- `id` (Long, obrigatório): O ID do fornecedor a ser deletado.

### Respostas:

- Código de Status: 200 OK
- Corpo da Resposta (Exemplo):
  ```json
  {
    "message": "Fornecedor deletado com sucesso."
  }
  ```

- Código de Status: 404 Not Found
- Corpo da Resposta (Exemplo):
  ```json
  {
    "message": "Fornecedor não encontrado com o ID fornecido."
  }
  ```

Esta é a documentação completa dos endpoints da API de Fornecedor. Certifique-se de fornecer os dados necessários conforme especificado para cada endpoint.