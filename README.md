# Documentação do Projeto: Sistema de Nível de Herói com Base em Vitórias e Derrotas

## Descrição

Este projeto tem como objetivo a criação de um sistema interativo em um site desenvolvido com HTML, CSS e JavaScript. O usuário informa o nome de um herói, juntamente com a quantidade de vitórias e derrotas que ele obteve, e o sistema retorna o nível do herói com base no número de vitórias, calculando o saldo de vitórias através da fórmula `vitórias - derrotas`. Com base nesse cálculo, é atribuído um nível ao herói de acordo com os seguintes critérios:

- **Ferro**: Menos de 10 vitórias.
- **Bronze**: Entre 11 e 20 vitórias.
- **Prata**: Entre 21 e 50 vitórias.
- **Ouro**: Entre 51 e 80 vitórias.
- **Diamante**: Entre 81 e 90 vitórias.
- **Lendário**: Entre 91 e 100 vitórias.
- **Imortal**: 101 vitórias ou mais.

## Tecnologias Utilizadas

- **HTML**: Para a estruturação do conteúdo da página.
- **CSS**: Para estilização e apresentação visual da página.
- **JavaScript**: Para a implementação da lógica de cálculo do saldo e determinação do nível do herói.

## Estrutura do Projeto

### Arquivos do Projeto

1. **index.html**: Página principal com o formulário de entrada e exibição do nível.
2. **style.css**: Arquivo de estilos para o design da página.
3. **script.js**: Arquivo JavaScript contendo a lógica de cálculo do saldo de vitórias e determinação do nível.

## Como Usar

1. Abra o arquivo `index.html` em um navegador.
2. Insira o nome do herói no campo "Nome do Herói".
3. Insira a quantidade de vitórias no campo "Vitórias".
4. Insira a quantidade de derrotas no campo "Derrotas".
5. Clique no botão "Calcular Nível".
6. O nível do herói será exibido abaixo do formulário com o saldo de vitórias calculado.

## Explicação da Lógica de Cálculo

A lógica de cálculo do nível do herói é baseada na quantidade de vitórias e derrotas fornecidas pelo usuário. A fórmula utilizada para calcular o saldo de vitórias é `vitórias - derrotas`. Com o saldo calculado, o código determina o nível do herói com base no número de vitórias utilizando a seguinte lógica:

- Se o número de vitórias for menor que 10, o nível será "Ferro".
- Se o número de vitórias estiver entre 11 e 20, o nível será "Bronze", e assim por diante, até o nível "Imortal" para 101 vitórias ou mais.

## Exemplo de Funcionamento

Suponha que um jogador tenha 15 vitórias e 5 derrotas:

- O saldo de vitórias será: `15 - 5 = 10`.
- Como o número de vitórias é entre 11 e 20, o herói será classificado no nível **Bronze**.

A mensagem exibida será: 

**"O Herói tem de saldo de 10 e está no nível de Bronze."**
