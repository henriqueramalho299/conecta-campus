# Conecta Campus

Guia acadêmico de ambientes, serviços e recursos de acessibilidade do campus.

## Versão 0.3

O site contém três páginas conectadas: início, locais e detalhes da Biblioteca Central. A página de detalhes apresenta recursos de acessibilidade e um painel com orientação de chegada. Os locais, trajetos e horários são ilustrativos.

## Execução local

O ponto de entrada é `index.html`, aberto diretamente no navegador. Os arquivos HTML, as pastas `css`, `js` e `img` permanecem na mesma estrutura. O site também funciona em um servidor de arquivos estáticos e não depende de instalação de pacotes ou serviços externos.

## Estrutura e tecnologias

| Arquivo | Responsabilidade |
| --- | --- |
| `index.html` | Apresentação e três destaques do campus |
| `locais.html` | Cartões da biblioteca, laboratório e rota acessível |
| `detalhes.html` | Informações da biblioteca, acessibilidade e orientação de chegada |
| `css/style.css` | Cores, tipografia, foco e layout responsivo compartilhado |
| `js/script.js` | Alternância da orientação e atualização do ano do rodapé |
| `img/` | Três ilustrações locais em PNG |

HTML organiza o conteúdo em regiões semânticas, links, listas e imagens com texto alternativo. CSS define a apresentação, com uma coluna no celular e três cartões por linha a partir de 48rem. JavaScript registra o clique com `addEventListener` e sincroniza a visibilidade do painel, `aria-expanded` e o texto do botão. Git mantém as etapas de evolução do projeto.

## Imagens

Ilustrações vetoriais originais do projeto, exportadas para PNG em 1536 × 1024 px. Representam ambientes fictícios; não são fotografias do campus.

| Imagem | Conteúdo | Uso |
| --- | --- | --- |
| `biblioteca-campus.png` | Estantes, mesas de estudo e corredor central | Início, Locais e Detalhes |
| `laboratorio-informatica.png` | Computadores, bancadas e circulação | Início e Locais |
| `rota-acessivel.png` | Rampa de entrada com corrimãos | Início e Locais |

## Planejamento

[Wireframe v0.2 no Figma](https://www.figma.com/design/ak5VKBMURb6UHHRECvnY1K) · [Documentação das telas](docs/wireframe.md)

## Autor
Henrique Ramalho
