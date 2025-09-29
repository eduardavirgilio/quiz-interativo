import styles from "./Header.module.css"
import React, { useState, useEffect } from 'react';

export default function Header() {

// numero da questão atual e da quantidade total de questões

  const numeroQuestaoAtual = 1;
  const totalQuestoes = 10;
  
  const textoQuestao = `Questão ${numeroQuestaoAtual} de ${totalQuestoes}`;

  const [segundos, setSegundos] = useState(0);

// cronometro

  useEffect(() => {
    const intervalo = setInterval(() => {
      // atualiza o estado dos segundos, somando 1 ao valor anterior para pegar sempre o valor mais recente.
      setSegundos(segundos => segundos + 1);
    }, 1000);

    // limpa o cronometro quando atualiza a tela
    return () => {
      clearInterval(intervalo);
    };
  }, []); 

  // formatação do tempo
  const formatarTempo = (totalSegundos) => {
    const minutos = Math.floor(totalSegundos / 60);
    const seg = totalSegundos % 60;

    // garante que o número tenha dois dígitos 
    const minutosFormatados = String(minutos).padStart(2, '0');
    const segundosFormatados = String(seg).padStart(2, '0');

    return `${minutosFormatados}:${segundosFormatados}`;
  };

  return (

    <header className={styles.header}>

      <h1 className={styles.textHeader}>Quiz Interativo</h1>
      
      <p className={styles.textHeader}>{textoQuestao}</p>

      <p className={styles.textHeader}>⏱ Tempo: {formatarTempo(segundos)}</p>

    </header>
  )
}