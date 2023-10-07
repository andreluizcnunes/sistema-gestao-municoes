<a href="../documentacaoAPI.md">
    <button>Voltar</button>
</a>
<br>
<br>

# Endpoints da API de Munição

A API de Munição fornece operações relacionadas a munições e marcas de munição.

## Listar Todas as Munições em Formato DTO

### Endpoint:
```
GET /municao/listaDTO
```

Este endpoint retorna uma lista de todas as munições no formato de DTO (Data Transfer Object).

### Resposta:

- Código de Status: 200 OK
- Corpo da Resposta (Exemplo):
  ```json
  [
    {
      "id": 1,
      "nome": "Munição A",
      "calibre": "9mm",
      "quantidade": 100
    },
    {
      "id": 2,
      "nome": "Munição B",
      "calibre": "5.56mm",
      "quantidade": 200
    }
  ]
  ```

## Listar Todas as Munições

### Endpoint:
```
GET /municao/listar
```

Este endpoint retorna uma lista de todas as munições no formato completo.

### Resposta:

- Código de Status: 200 OK
- Corpo da Resposta (Exemplo):
  ```json
  [
    {
      "id": 1,
      "nome": "Munição A",
      "calibre": "9mm",
      "quantidade": 100,
      "marca": {
        "id": 1,
        "nome": "Marca X"
      }
    },
    {
      "id": 2,
      "nome": "Munição B",
      "calibre": "5.56mm",
      "quantidade": 200,
      "marca": {
        "id": 2,
        "nome": "Marca Y"
      }
    }
  ]
  ```

## Consultar Munição por Nome

### Endpoint:
```
GET /municao/consultar?nome={nome}
```

Este endpoint permite consultar munições pelo nome.

### Parâmetros da Solicitação:

- `nome` (String, obrigatório): O nome da munição a ser consultada.

### Resposta:

- Código de Status: 200 OK
- Corpo da Resposta (Exemplo):
  ```json
  [
    {
      "id": 1,
      "nome": "Munição A",
      "calibre": "9mm",
      "quantidade": 100,
      "marca": {
        "id": 1,
        "nome": "Marca X"
      }
    }
  ]
  ```

## Contar o Total de Munições

### Endpoint:
```
GET /municao/total
```

Este endpoint retorna o número total de munições cadastradas.

### Resposta:

- Código de Status: 200 OK
- Corpo da Resposta (Exemplo):
  ```json
  2
  ```

## Verificar Estoque Baixo Urgente

### Endpoint:
```
GET /municao/estoqueBaixoUrgente
```

Este endpoint retorna o número de munições em estoque com níveis críticos (urgente).

### Resposta:

- Código de Status: 200 OK
- Corpo da Resposta (Exemplo):
  ```json
  5
  ```

## Verificar Estoque Baixo

### Endpoint:
```
GET /municao/estoqueBaixo
```

Este endpoint retorna o número de munições em estoque com níveis baixos (menos de 3000).

### Resposta:

- Código de Status: 200 OK
- Corpo da Resposta (Exemplo):
  ```json
  10
  ```

## Cadastrar Nova Munição

### Endpoint:
```
POST /municao/cadastrar
```

Este endpoint permite cadastrar uma nova munição.

### Corpo da Solicitação (Exemplo):
```json
{
  "nome": "Munição C",
  "calibre": "7.62mm",
  "quantidade": 500,
  "marca": {
    "id": 3
  }
}
```

### Respostas:

- Código de Status: 200 OK
- Corpo da Resposta (Exemplo):
  ```
  Munição cadastrada com sucesso.
  ```

- Código de Status: 400 Bad Request
- Corpo da Resposta (Exemplo):
  ```
  Marca não encontrada com o ID fornecido.
  ```

## Editar Munição Existente

### Endpoint:
```
PUT /municao/editar
```

Este endpoint permite editar uma munição existente.

### Corpo da Solicitação (Exemplo):
```json
{
  "id": 1,
  "nome": "Munição A (Editada)",
  "calibre": "9mm",
  "quantidade": 150,
  "marca": {
    "id": 1
  }
}
```

### Respostas:

- Código de Status: 200 OK
- Corpo da Resposta (Exemplo):
  ```
  Munição editada com sucesso.
  ```

- Código de Status: 404 Not Found
- Corpo da Resposta (Exemplo):
  ```
  Munição não encontrada com o ID fornecido.
  ```

## Deletar Munição por ID

### Endpoint:
```
DELETE /municao/deletar/{id}
```

Este endpoint permite deletar uma munição pelo seu ID.

### Parâmetros da Solicitação:

- `id` (Long, obrigatório): O ID da munição a ser deletada.

### Respostas:

- Código de Status: 200 OK
- Corpo da Resposta (Exemplo):
  ```json
  {
    "message": "Munição deletada com sucesso."
  }
  ```

- Código de Status: 404 Not Found
- Corpo da Resposta (Exemplo):
  ```json
  {
    "message": "Munição não encontrada com o ID fornecido."
  }
  ```

Esta é a documentação completa dos endpoints da API de Munição. Certifique-se de fornecer os dados necessários conforme especificado para cada endpoint.