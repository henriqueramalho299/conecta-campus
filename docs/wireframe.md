# Wireframe do Conecta Campus

## Objetivo

Planejar a organização das telas antes da implementação em HTML e CSS. O wireframe é de baixa fidelidade: prioriza hierarquia, conteúdo e navegação, sem imagens definitivas ou efeitos.

## Frames e camadas

Usar um frame móvel de referência de **390 × 844 px** para cada tela. Manter as camadas dentro do frame correspondente e usar nomes descritivos.

### 01-Home-Mobile

1. `cabecalho`
2. `titulo-aplicacao` — Conecta Campus
3. `campo-busca` — “O que você procura?”
4. `categorias` — Ambientes, Serviços e Acessibilidade
5. `lista-destaques` — dois blocos de destaque
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

## Estilos locais a criar no Figma

| Nome | Propriedades | Uso |
| --- | --- | --- |
| `Texto/Titulo` | Inter ou Arial, 24 px, negrito | Título principal de cada tela |
| `Texto/Corpo` | Inter ou Arial, 16 px, regular | Rótulos e textos auxiliares |
| `Cor/Texto` | `#1F2937` | Texto principal |
| `Cor/Superficie` | `#F3F4F6` | Blocos e cards neutros |
| `Cor/Borda` | `#CBD5E1` | Contorno dos blocos |

Aplicar os estilos em pelo menos uma camada de cada frame. Não publicar uma biblioteca de estilos para esta atividade.

## Link do Figma

**Pendente:** adicionar o link de visualização do arquivo **Conecta Campus - Wireframe v0.2** depois de criar os três frames, aplicar os cinco estilos e testar o link em uma janela privativa. A permissão deve ser apenas de visualização; não usar edição pública.

## Registro do fluxo Git (WP08)

A `main` serviu como ponto de partida para o branch `feature/wireframe-inicial`.  
O documento foi criado em um commit e publicado no branch remoto.  
O branch foi usado para abrir um Pull Request com base em `main`.  
O wireframe e os estilos precisam ser criados no Figma e o link registrado em um novo commit no mesmo branch.  
Depois de revisar `Files changed`, confirmar o link e verificar a ausência de arquivos indevidos, o PR poderá ser mesclado.  
Após o merge, a cópia local deve ser sincronizada com `git pull`, e os branches temporários podem ser encerrados.

## Critérios de conferência

- [ ] Existem três frames móveis nomeados conforme as seções acima.
- [ ] As camadas têm nomes compreensíveis e estão dentro do frame correto.
- [ ] Os cinco estilos locais foram criados e aplicados.
- [ ] O link abre o arquivo inteiro em modo de visualização.
- [ ] O PR tem base `main`, compare `feature/wireframe-inicial` e apenas este arquivo em **Files changed**.
- [ ] Após o merge, `docs/wireframe.md` está em `main` e a árvore de trabalho local está limpa.
