<a href="../documentacaoAPI.md">
    <button>Voltar</button>
</a>
<br>
<br>

# Endpoints da API de Empréstimo de Munição

A API de Empréstimo de Munição oferece operações relacionadas ao empréstimo de munições.

## Empréstimo de Munição

### Endpoint:
```
POST /emprestimo-municao/emprestar
```

Este endpoint permite realizar o empréstimo de munição, registrando o empréstimo no sistema.

### Corpo da Solicitação (Exemplo):
```json
{
  "dataEmpréstimo": "2023-10-07",
  "quantidade": 50,
  "observacao": "Empréstimo para treinamento"
}
```

### Respostas:

- Código de Status: 200 OK
- Corpo da Resposta (Exemplo):
  ```
  Estoque de munição atualizado com sucesso
  ```

- Código de Status: 500 Internal Server Error
- Corpo da Resposta (Exemplo):
  ```
  Erro ao atualizar o estoque de munição: <mensagem de erro>
  ```

## Listar Empréstimos no Formato DTO

### Endpoint:
```
GET /emprestimo-municao/listarDTO
```

Este endpoint retorna uma lista de todos os empréstimos de munição no formato DTO (Data Transfer Object).

### Resposta:

- Código de Status: 200 OK
- Corpo da Resposta (Exemplo):
  ```json
  [
    {
      "id": 1,
      "dataEmpréstimo": "2023-10-07",
      "quantidade": 50,
      "observacao": "Empréstimo para treinamento"
    },
    {
      "id": 2,
      "dataEmpréstimo": "2023-10-08",
      "quantidade": 30,
      "observacao": "Empréstimo para teste"
    }
  ]
  ```

Esta é a documentação completa dos endpoints da API de Empréstimo de Munição. Certifique-se de fornecer os dados necessários conforme especificado para o endpoint de empréstimo.