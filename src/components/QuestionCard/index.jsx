import styles from "./QuestionCard.module.css";
import questions from "../../data/questions"
import React, { useState } from 'react';

export default function QuestionCard() {   
    
// retornando a questao

  // pega o índice da questão atual (começa em 0)
  const [indiceQuestao, setIndiceQuestao] = useState(0);

  // pega a questão com base no indice 
  const questaoAtual = questions[indiceQuestao]; 

// pega a quantidade de questões
  const totalQuestoes = questions.length;

// vai para a proxima questão quando clica em uma opção
    const avancarQuestao = (opcaoSelecionada) => {
    
        // verifica se ainda tem mais questões
        if (indiceQuestao < totalQuestoes - 1) {

        // se tiver, soma uma questão
            setIndiceQuestao(indiceQuestao + 1);

        } else {
            // Se não tiver, finaliza o quiz
            alert('Fim do Quiz!');
        }
      };

  return (

    <div className={styles.main}>
    {/* retorna quantas questõs tem no quiz e em qual o usuario está */}
    <p>Questão {indiceQuestao + 1} de {totalQuestoes}</p>
          
    {/* enunciado da questão */}
     <h2>{questaoAtual.question}</h2>
    
    {/* opções em formato de botão através do map */}
    <div className="opcoes-container">
     
     {questaoAtual.options.map((opcao, index) => (
     
    <button 
    key={index} 
     className={styles.button}
    // passa a opção selecionada para a função
    onClick={() => avancarQuestao(opcao)} 
    >
    {`${opcao}`} 
    </button>
    ))}
    
    </div>
</div>

  );
    
}