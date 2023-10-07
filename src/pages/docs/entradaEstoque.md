<a href="../documentacaoAPI.md">
    <button>Voltar</button>
</a>
<br>
<br>

# Endpoints da API de Entrada de Estoque de Munição

A API de Entrada de Estoque de Munição oferece operações relacionadas à entrada de munição no estoque.

## Registrar Nova Entrada de Munição no Estoque

### Endpoint:
```
POST /entradaestoque/newEntrada
```

Este endpoint permite registrar uma nova entrada de munição no estoque.

### Corpo da Solicitação (Exemplo):
```json
{
  "dataEntrada": "2023-10-07",
  "quantidade": 100
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

## Contar o Total de Entradas de Estoque de Munição

### Endpoint:
```
GET /entradaestoque/total
```

Este endpoint retorna o número total de entradas de estoque de munição registradas.

### Resposta:

- Código de Status: 200 OK
- Corpo da Resposta (Exemplo):
  ```json
  10
  ```

Esta é a documentação completa dos endpoints da API de Entrada de Estoque de Munição. Certifique-se de fornecer os dados necessários conforme especificado para o endpoint de registro de entrada.