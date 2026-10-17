# Da planilha bagunçada ao modelo relacional

**1FN, 2FN, 3FN e BCNF na prática, com SQL no PostgreSQL 16**

Artigo técnico em formato de blog sobre normalização de bancos de dados, publicado como página web estática. Partimos de uma planilha de pedidos de uma loja virtual, cheia de dados repetidos, e mostramos como as formas normais a transformam em tabelas menores, passando pela 1FN, 2FN e 3FN até um caso em que a 3FN não basta e a BCNF resolve.

🔗 **Página publicada:** https://artigofn.vercel.app/

## Público-alvo

Estudantes de TI que sabem programar e já viram o básico de SQL, mas têm pouca experiência em modelagem de dados.


## Conteúdo do artigo

1. **Introdução:** a planilha de pedidos com dados repetidos e as anomalias de atualização, inserção e exclusão
2. **Conceitos:** chave primária, chave estrangeira e dependência funcional
3. **1FN:** um valor por célula (valor atômico)
4. **2FN:** dependência parcial
5. **3FN:** dependência transitiva, com o SQL das tabelas `cliente` e `pedido`
6. **BCNF:** quando a 3FN não basta (caso de horários de um curso)
7. **Limites:** quando não normalizar e o que vem depois (4FN e 5FN)
8. **Para ler mais** e **Referências**

## Recursos da página

Feita só com HTML, CSS e JavaScript puros, sem bibliotecas nem dependências externas.

- Índice lateral que destaca a seção que está sendo lida
- Tema claro e escuro (segue o sistema e lembra a escolha)
- Destaque de sintaxe nos blocos SQL, com botão de copiar
- Barra de progresso de leitura e botão de voltar ao topo
- Layout responsivo para celular


## Estrutura do repositório

```
.
├── index.html     # página do artigo
├── css/
│   └── style.css  # estilos (tema claro e escuro)
├── js/
│   └── main.js    # índice ativo, tema, destaque de SQL, progresso
├── sql/           # scripts SQL numerados (a adicionar)
└── README.md
```

## Referências

- BOYCE–Codd normal form. In: WIKIPEDIA. [s.d.]. Disponível em: https://en.wikipedia.org/wiki/Boyce%E2%80%93Codd_normal_form. Acesso em: 16 out. 2026.
- GURU99. *Normalização de DBMS: exemplos de 1NF, 2NF, 3NF*. [s.d.]. Disponível em: https://www.guru99.com/pt/database-normalization.html. Acesso em: 16 out. 2026.
- KENT, W. A Simple Guide to Five Normal Forms in Relational Database Theory. *Communications of the ACM*, v. 26, n. 2, p. 120-125, 1983. Disponível em: https://www.bkent.net/Doc/simple5.htm. Acesso em: 16 out. 2026.


