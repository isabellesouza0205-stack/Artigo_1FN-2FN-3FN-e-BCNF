# Da planilha bagunçada ao modelo relacional: 1FN, 2FN, 3FN e BCNF na prática

Artigo técnico sobre normalização de bancos de dados, feito como página web estática. Partimos de uma planilha de pedidos de uma loja, com dados repetidos, e a transformamos em tabelas menores, passando pela 1FN, 2FN e 3FN até chegar a um caso em que a 3FN não basta e a BCNF resolve.

**Página publicada:** [colar aqui o link do GitHub Pages]

## Público-alvo

Estudantes de TI que sabem programar e já viram o básico de SQL, mas têm pouca experiência em modelagem de dados.

## Autores

| Nome | GitHub | LinkedIn |
| [Nome completo da Isabelle] | [@isabellesouza0205-stack](https://github.com/isabellesouza0205-stack) |
| Gabriel Venancio Lima | 
| Gustavo Oliveira Andrade | [https://github.com/tatiwesleygu-boop] | 
| [Nome do 4º integrante, se houver] | [link do GitHub] |

Cada integrante autorizou a publicação do que aparece acima (nome, foto e perfis profissionais). As autorizações estão registradas pelo grupo.

## Conteúdo do artigo

1. Introdução: o problema real da planilha com dados repetidos
2. A planilha com problema e as anomalias de inserção, atualização e exclusão
3. 1FN: valores atômicos
4. 2FN: dependência parcial
5. 3FN: dependência transitiva
6. BCNF: quando a 3FN não basta (caso de horários)
7. Erros comuns, limitações e como começar na área
8. Referências

## Como rodar os scripts localmente

- **SGBD:** PostgreSQL [versão, ex.: 16], usando o pgAdmin 4
- Crie um banco limpo (por exemplo, `normalizacao`).
- Abra o Query Tool do pgAdmin e execute os arquivos da pasta `sql/` na ordem numérica:

| Arquivo | O que faz |
| `01_planilha_inicial.sql` | Tabela única com dados repetidos e demonstração das anomalias |
| `02_1fn.sql` | Aplica a 1FN (valores atômicos) |
| `03_2fn.sql` | Remove dependências parciais |
| `04_3fn.sql` | Remove dependências transitivas |
| `05_bcnf_horarios.sql` | Caso de horários em que a BCNF resolve |

Todos os dados dos scripts são **fictícios**. Para conferir a versão do seu banco, execute `SELECT version();`.

## Estrutura do repositório

```
.
├── index.html     # página do artigo
├── css/           # estilos
├── img/           # imagens e diagramas
├── sql/           # scripts SQL numerados
└── README.md
```

## Créditos

**Referências**
- Codd, E. F. *A Relational Model of Data for Large Shared Data Banks*. 1970.
- Documentação oficial do PostgreSQL.
- [adicionar as demais referências usadas no artigo]

**Imagens**
- [descrever cada imagem, autoria e licença]

## Observação

As opiniões expressas na página são dos autores.
