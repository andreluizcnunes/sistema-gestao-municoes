<a href="../documentacaoAPI.md">
    <button>Voltar</button>
</a>
<br>
<br>

# Endpoints da API de Marca

A API de Marca oferece operações relacionadas a marcas de munição.

## Listar Todas as Marcas

### Endpoint:
```
GET /marca/listar
```

Este endpoint retorna uma lista de todas as marcas cadastradas.

### Resposta:

- Código de Status: 200 OK
- Corpo da Resposta (Exemplo):
  ```json
  [
    {
      "id": 1,
      "nome": "Marca A"
    },
    {
      "id": 2,
      "nome": "Marca B"
    }
  ]
  ```

## Consultar Marca por Nome

### Endpoint:
```
GET /marca/consultar?nome={nome}
```

Este endpoint permite consultar marcas pelo nome.

### Parâmetros da Solicitação:

- `nome` (String, obrigatório): O nome da marca a ser consultada.

### Resposta:

- Código de Status: 200 OK
- Corpo da Resposta (Exemplo):
  ```json
  [
    {
      "id": 1,
      "nome": "Marca A"
    }
  ]
  ```

## Cadastrar Nova Marca

### Endpoint:
```
POST /marca/cadastrardto
```

Este endpoint permite cadastrar uma nova marca usando um objeto MarcaModel.

### Corpo da Solicitação (Exemplo):
```json
{
  "nome": "Marca C"
}
```

### Respostas:

- Código de Status: 200 OK
- Corpo da Resposta (Exemplo):
  ```
  Marca cadastrada com sucesso.
  ```

## Cadastrar Nova Marca (Versão Alternativa)

### Endpoint:
```
POST /marca/cadastrar
```

Este endpoint permite cadastrar uma nova marca usando um objeto MarcaModel.

### Corpo da Solicitação (Exemplo):
```json
{
  "nome": "Marca D"
}
```

### Resposta:

- Código de Status: 200 OK
- Corpo da Resposta (Exemplo):
  ```json
  {
    "id": 3,
    "nome": "Marca D"
  }
  ```

## Editar Marca Existente

### Endpoint:
```
PUT /marca/editar
```

Este endpoint permite atualizar uma marca existente usando um objeto MarcaModel.

### Corpo da Solicitação (Exemplo):
```json
{
  "id": 1,
  "nome": "Marca A (Editada)"
}
```

### Respostas:

- Código de Status: 200 OK
- Corpo da Resposta (Exemplo):
  ```
  Marca editada com sucesso.
  ```

- Código de Status: 404 Not Found
- Corpo da Resposta (Exemplo):
  ```
  Marca não encontrada com o ID fornecido.
  ```

## Deletar Marca por ID

### Endpoint:
```
DELETE /marca/deletar/{id}
```

Este endpoint permite deletar uma marca pelo seu ID.

### Parâmetros da Solicitação:

- `id` (Long, obrigatório): O ID da marca a ser deletada.

### Respostas:

- Código de Status: 200 OK
- Corpo da Resposta (Exemplo):
  ```json
  {
    "message": "Marca deletada com sucesso."
  }
  ```

- Código de Status: 404 Not Found
- Corpo da Resposta (Exemplo):
  ```json
  {
    "message": "Marca não encontrada com o ID fornecido."
  }
  ```

Esta é a documentação completa dos endpoints da API de Marca. Certifique-se de fornecer os dados necessários conforme especificado para cada endpoint.