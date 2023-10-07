<a href="../documentacaoAPI.md">
    <button>Voltar</button>
</a>
<br>
<br>

# Endpoint da API de Devolução de Munição

A API de Devolução de Munição oferece uma operação relacionada à devolução de munições.

## Devolução de Munição

### Endpoint:
```
POST /devolucao-municao/devolucao
```

Este endpoint permite registrar a devolução de munição, atualizando o estoque de munições no sistema.

### Corpo da Solicitação (Exemplo):
```json
{
  "dataDevolucao": "2023-10-07",
  "quantidadeDevolvida": 20,
  "motivoDevolucao": "Treinamento concluído"
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

Esta é a documentação completa do endpoint da API de Devolução de Munição. Certifique-se de fornecer os dados necessários conforme especificado para o endpoint de devolução.