# 🕹️ Quiz interativo

Este projeto é uma implementação de um quiz interativo construído em React, desenvolvido com base nos projetos anteriores trabalhados em aula e de forma modular.

---

## Estrutura do Projeto e Componentes

O quiz é organizado em três componentes principais:

### 1. `Header` 

Este é o componente que gerencia **o cabeçalho** do quiz, mostrando quanto tempo o usuário está na questão.

### 2. `QuestionCard` 

Este componente é responsável por retornar as questões e suas opções para o usuário selecionar, além de mostrar em qual questão ele está.

### 3. `ScoreBoard` 

Este componente retorna o resultado do quiz, mostrando as questões que estavam certas e erradas, além de um relatório mostrando a pontuação total, o menor tempo e a quantidade de acertos. 

### 4. `questions.js` 

Uma função que recebe o array com todos os dados de cada questão (enunciado, opções, pontuação, resposta correta e id)

---

## Primeiros Passos para executar o projeto

1.  Clone o repositório.

2.  Instale as dependências:
    ```bash
    npm install
    ```

3.  Execute o projeto:
    ```bash
    npm run dev
    ```