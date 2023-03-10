# Loja da MKS Sistemas

<p>Página web criada para cumprir o desafio técnico da MKS Sistemas.</p>

## Conteúdo deste Readme:

- [Resumo](#resumo)
  - [O Desafio](#o-desafio)
  - [Screenshot](#screenshot)
- [Meu processo](#meu-processo)
  - [Projetado com](#projetado-com)
  - [O que eu aprendi](#o-que-eu-aprendi)
- [Autores](#autores)

## Resumo

### O Desafio

O objetivo principal desse teste é avaliar sua capacidade de escrever código limpo, bem testado e reutilizável. Ao terminar, faça o deploy da aplicação e mande-nos o link.

Tarefa (funcional)
---------------

Para esse desafio, você deve consumir nossa [API REST de produtos](https://mks-challenge-api-frontend.herokuapp.com/api-docs/) para exibir a lista de produtos da loja.

A aplicação deve conter apenas uma página/rota e um carrinho.

- <b>Loja</b>: A lista de produtos deve ser buscada de nossa API, use um shimmer/skeleton enquanto estiver em loading.
 
- <b>Carrinho</b>: O carrinho deve conter todos os produtos selecionados, juntamente com a opção de aumentar a quantidade de cada produto selecionado.

Utilizar Jest e a testing-library para realizar os testes unitários.

O usuário deverá conseguir:

- Navegar pelos produtos disponibilizados após o consumo da API;
- Escolher quais produtos quer acrescentar em seu carrinho de compras;
- Abrir o modal do carrinho de compras através do botão no cabeçalho;
- Navegar pelos produtos selecionados, com a opção de aumentar ou diminuir a quantidade, bem como excluir algum produto do carrinho;
- Acompanhar o valor total da compra de forma simultânea e finalizar a compra através do botão;
- Não deverá conseguir finalizar a compra com o carrinho vazio;

### Screenshot

#### Imagem da página inicial

![](/public/print1.png)

#### Imagem do modal do carrinho de compras com os produtos selecionados

![](/public/print2.png)

#### Imagem da compra realiza com sucesso

![](/public/print3.png)

## Processo de Criação

### Projetado com

- React;
- Typescript;
- Styled Components;
- Redux;
- JEST;
- Hooks useState, useEffect;
- Componentes Reutilizáveis;
- Animações com o animate;

### O que eu aprendi

🟢 Integração de API com o front-end<br>
🟢 Integração entre componentes instantaneamente com o Redux<br>
🟢 Testes com o JEST<br>
🟢 Estilização com StyledComponents<br>

## Autor

- [Matheus Trojan](https://www.linkedin.com/in/matheus-trojan/)
