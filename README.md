# EcoModa ERP — Instituto EcoModa Sustentável

## 1. Briefing do problema

O Instituto EcoModa é uma ONG e marca autoral de moda sustentável que reaproveita tecidos e emprega mulheres em situação de vulnerabilidade. O crescimento da produção tornou o processo de vendas por Instagram e mensagens privadas difícil de administrar.

O principal problema é a falta de uma estrutura centralizada para controlar vendas, disponibilidade de peças únicas, produção, estoque, dados financeiros e a rastreabilidade do impacto social e ambiental.

## 2. Solução escolhida: Sistema ERP

A solução escolhida é um **sistema ERP (Enterprise Resource Planning)** voltado para a realidade da EcoModa.

A escolha faz sentido porque a dor não está apenas na venda. A organização precisa integrar diferentes áreas em um único sistema, evitando informações espalhadas em mensagens, planilhas e controles manuais.

### Módulos do ERP

- Dashboard: visão geral dos indicadores.
- Vendas e pedidos: registro e acompanhamento dos pedidos.
- Estoque: produtos, quantidade, origem dos materiais e disponibilidade.
- Produção: ordens de produção e acompanhamento por etapa.
- Artesãs: equipe produtiva e peças realizadas.
- Impacto: rastreabilidade social e ambiental de cada produto.
- Clientes: histórico de compras e relacionamento.
- Financeiro: receitas, despesas e saldo.

## 3. Benefícios

- Reduz o trabalho manual da equipe administrativa.
- Centraliza informações em um único ambiente.
- Evita vender uma peça única sem disponibilidade.
- Facilita o acompanhamento da produção.
- Organiza receitas e despesas.
- Permite rastrear a artesã responsável por uma peça.
- Evidencia o tecido reaproveitado e o impacto gerado.
- Cria uma base para a expansão das vendas em nível nacional.

## 4. Protótipo

O protótipo foi construído como uma interface web responsiva. O dashboard apresenta indicadores, pedidos recentes e resumo financeiro. Os demais módulos podem ser acessados pelo menu lateral.

## 5. Arquitetura

Protótipo front-end:
- HTML5 para estrutura.
- CSS3 para identidade visual e responsividade.
- JavaScript para navegação entre módulos, filtros e mensagens de interação.

Em uma versão de produção, o ERP poderia utilizar:
- Front-end: React ou outro framework web.
- Back-end: API REST.
- Banco de dados: PostgreSQL ou SQL Server.
- Autenticação e autorização por perfil.
- Integração com meios de pagamento e cálculo de frete.

## 6. Segurança

Nenhuma senha, token, chave de API ou credencial é armazenada neste projeto.

## 7. Execução

1. Baixe ou clone o repositório.
2. Abra a pasta `ecomoda-erp`.
3. Abra o arquivo `index.html` em um navegador.

O protótipo não depende de internet ou de instalação de bibliotecas externas.

## 8. Estrutura

```text
ecomoda-erp/
├── index.html
├── README.md
├── LICENSE
├── .gitignore
├── css/
│   └── style.css
├── js/
│   └── app.js
└── img/
```

## 9. Relação com o estudo de caso

A proposta atende diretamente às dores descritas no estudo de caso: a necessidade de alcançar um público maior, substituir o processo manual de encomendas por Instagram e mensagens privadas, organizar disponibilidade, produção e vendas, e dar visibilidade à rastreabilidade do impacto social e ecológico.

## 10. Autoria

Projeto acadêmico desenvolvido para a disciplina de Design Profissional — Produção de Portfólio & Desenvolvimento Empresarial.
