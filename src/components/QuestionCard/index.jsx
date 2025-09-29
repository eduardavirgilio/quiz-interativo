import styles from "./QuestionCard.module.css";
import questions from "../../data/questions"
import React from 'react';

export default function QuestionCard() {   
    
// pegando a questao
  const questaoAtual = questions[0]; 

  return (
    <div>
      {/* enunciado da questão */}
      <h2>{questaoAtual.question}</h2>

      {/* opções em formato de botão através do map */}
      <div className="opcoes-container">
        
        {/* o map vai percorrer cada opção de acordo com o enunciado e retornar ela em um botão */}
        {questaoAtual.options.map((opcao, index) => (
          
          <button 
            key={index} 
            className="opcao-button"
            onClick={() => console.log('Opção selecionada:', opcao)} // mostrando no console a opção selecionada
          >
            {/* texto do botão */}
            {opcao} 
          </button>
        ))}
        
      </div>
    </div>
  );
    

    return (
        <main className={styles.main}>
    
        </main>
    )
}