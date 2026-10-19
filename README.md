# Conecta Campus

Guia acadêmico de ambientes, serviços e recursos de acessibilidade do campus.

## Versão 0.5

O site contém cinco páginas conectadas: início, locais, detalhes da Biblioteca Central, contato e integrantes. A página de detalhes apresenta recursos de acessibilidade e um painel com orientação de chegada. A página de contato permite sugerir novos locais, informar recursos de acessibilidade e corrigir informações do guia. Os locais, trajetos e horários são ilustrativos.

## Estrutura e tecnologias

| Arquivo | Responsabilidade |
| --- | --- |
| `index.html` | Apresentação e três destaques do campus |
| `locais.html` | Cartões da biblioteca, laboratório e rota acessível |
| `detalhes.html` | Informações da biblioteca, acessibilidade e orientação de chegada |
| `contato.html` | Formulário de sugestões com validação local |
| `integrantes.html` | Apresentação da equipe do projeto |
| `css/style.css` | Cores, tipografia, foco e layout responsivo compartilhado |
| `js/script.js` | Orientação, ano do rodapé e validação do formulário |
| `img/` | Três ilustrações locais em PNG e fotografia do integrante |

HTML organiza o conteúdo em regiões semânticas, links, listas e imagens com texto alternativo. CSS define a apresentação com larguras relativas e uma base para telas pequenas. A navegação tem um botão de abertura no celular; a partir de 48rem, o cabeçalho e os links usam Flexbox. As listas de cartões usam Grid, com uma coluna no celular e três colunas em telas maiores. JavaScript registra o clique com `addEventListener` e sincroniza a visibilidade do painel, `aria-expanded` e o texto do botão. Git mantém as etapas de evolução do projeto.

## Navegação e layout

O botão Menu controla a navegação identificada por `menu-principal`. O JavaScript alterna a classe `menu-aberto`, o estado `aria-expanded` e o ícone. A partir de 48rem, a navegação fica visível e o botão é ocultado, independentemente do estado anterior no celular. Sem JavaScript, os links permanecem disponíveis.

O cabeçalho e a lista de links são containers Flexbox em telas maiores. As listas de locais usam a classe `lista-cartoes`, com Grid de uma ou três colunas e espaçamento de 1.25rem. O formulário, as informações do integrante e a orientação de chegada permanecem disponíveis nas cinco páginas.

## Contato

O formulário valida nome com pelo menos três caracteres após `trim`, e-mail com arroba e ponto, seleção de assunto e mensagem com pelo menos dez caracteres após `trim`. Os erros aparecem próximos aos campos e são associados por `aria-describedby`, com estado `aria-invalid` e resumo anunciado por `role="status"`.

O evento `submit` é interceptado com `preventDefault`. Uma tentativa válida limpa o formulário e retorna o foco ao nome. A validação é inicial e não confirma a existência do endereço de e-mail. Não há transmissão, armazenamento ou serviço de envio nesta versão.

## Imagens

Ilustrações vetoriais originais do projeto, exportadas para PNG em 1536 × 1024 px. Representam ambientes fictícios; não são fotografias do campus.

| Imagem | Conteúdo | Uso |
| --- | --- | --- |
| `biblioteca-campus.png` | Estantes, mesas de estudo e corredor central | Início, Locais e Detalhes |
| `laboratorio-informatica.png` | Computadores, bancadas e circulação | Início e Locais |
| `rota-acessivel.png` | Rampa de entrada com corrimãos | Início e Locais |
| `henrique-ramalho.jpg` | Fotografia de Henrique dos Santos Ramalho | Integrantes |

## Planejamento

[Wireframe v0.2 no Figma](https://www.figma.com/design/ak5VKBMURb6UHHRECvnY1K) · [Documentação das telas](docs/wireframe.md)

## Autor
Henrique dos Santos Ramalho · RM 575759 · Turma 1PDSPA-26

Trabalho individual.
