# Wireframe do Conecta Campus

## Objetivo

Planejar a organização das telas antes da implementação em HTML e CSS. O wireframe é de baixa fidelidade: prioriza hierarquia, conteúdo e navegação, sem imagens definitivas ou efeitos.

## Frames e camadas

As três telas possuem frames móveis de **390 × 844 px**, com camadas nomeadas e organizadas dentro de seus respectivos frames.

### 01-Home-Mobile

1. `cabecalho`
2. `titulo-aplicacao` — Conecta Campus
3. `campo-busca` — “O que você procura?”
4. `categorias` — Ambientes, Serviços e Acessibilidade
5. `destaque-biblioteca` e `destaque-secretaria` — dois blocos de destaque
6. `rodape`

### 02-Locais-Mobile

1. `cabecalho`
2. `titulo-pagina` — Locais
3. `campo-busca`
4. `filtros-locais`
5. `card-local-01`, `card-local-02`, `card-local-03` — cada card inclui nome, categoria e indicação de acessibilidade.

### 03-Detalhe-Mobile

1. `cabecalho`
2. `acao-voltar`
3. `titulo-local`
4. `imagem-local-placeholder`
5. `informacoes-local` — prédio, andar, horário e descrição
6. `secao-acessibilidade` — elevador, rampa e banheiro acessível
7. `orientacao-chegada` — espaço reservado para mapa ou orientação.

## Estilos locais criados e aplicados no Figma

| Nome | Propriedades | Uso |
| --- | --- | --- |
| `Texto/Titulo` | Inter, 24 px, negrito | Título principal de cada tela |
| `Texto/Corpo` | Inter, 16 px, regular | Rótulos e textos auxiliares |
| `Cor/Texto` | `#1F2937` | Texto principal |
| `Cor/Superficie` | `#F3F4F6` | Blocos e cards neutros |
| `Cor/Borda` | `#CBD5E1` | Contorno dos blocos |

Os cinco estilos locais estão aplicados nos três frames.

## Link do Figma

[Conecta Campus - Wireframe v0.2](https://www.figma.com/design/ak5VKBMURb6UHHRECvnY1K)

Os três frames de 390 × 844 px foram criados com textos editáveis, camadas nomeadas e cinco estilos locais aplicados. Os dados de locais e horários são ilustrativos. A revisão visual confirmou que os textos cabem nos blocos.

## Registro do fluxo Git (WP08)

A `main` foi a base do branch `feature/wireframe-inicial`.  
O documento de planejamento foi registrado em commits e publicado no repositório remoto.  
O Pull Request nº 1 reuniu a documentação das três telas móveis.  
O wireframe foi criado no Figma com camadas editáveis e cinco estilos locais.  
O link do arquivo foi adicionado ao documento em um novo commit.  
Após a revisão, o Pull Request foi mesclado à `main`.

