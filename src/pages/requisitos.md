# 🖥️ Sistema Gestão de Munições

# 📕 Menu
<a href="../../Readme.md">
    <button>➡️ Home</button>
</a>
<a href="./escopo.md">
    <button>➡️ Escopo</button>
</a>
<a href="./fluxograma.md">
    <button>➡️ Fluxograma</button>
</a>
<hr

# Requisitos Funcionais:

## ➡️ Registro de Munições:

O sistema deve permitir o cadastro de novos tipos de munições, incluindo informações como calibre, tipo, fabricante, lote e data de fabricação.

Deve ser possível incluir imagens das munições para fins de identificação.

## ➡️ Controle de Estoque:

O sistema deve manter um registro em tempo real do estoque de munições, incluindo quantidade atual disponível para cada tipo de munição.

Deve ser possível realizar consultas de estoque por tipo de munição e por unidade de armazenamento.

## ➡️ Rastreamento de Distribuição:

O sistema deve permitir o registro das saídas de munições do estoque, indicando data, quantidade, destino, finalidade e pessoa responsável.

Deve ser possível autorizar e registrar transferências entre unidades, com aprovações necessárias.

## ➡️ Alertas de Prazo de Validade:

O sistema deve gerar alertas quando as munições estiverem a X dias de seu vencimento, permitindo ações preventivas.

## ➡️ Relatórios:

O sistema deve gerar relatórios periódicos sobre o uso, distribuição e status do estoque de munições, com opções de filtragem por período, tipo de munição e unidade.

## ➡️ Requisitos de Usabilidade:

A interface da aplicação deve ser intuitiva e de fácil utilização, considerando a diversidade de usuários.

## ➡️ Requisitos de Segurança:

A aplicação deve implementar um sistema de autenticação robusto para garantir que apenas pessoal autorizado possa acessar as funcionalidades.

O acesso a certas funcionalidades, como aprovações de transferência, deve ser restrito a usuários com permissões específicas.

## ➡️ Requisitos de Desempenho:

O sistema deve ser capaz de lidar com um grande número de registros de munições e transações de estoque de forma responsiva e eficiente.

## ➡️ Requisitos de Auditoria:

Todas as atividades realizadas na aplicação devem ser registradas e disponíveis para auditoria posterior, incluindo registros de alterações de estoque e autorizações.