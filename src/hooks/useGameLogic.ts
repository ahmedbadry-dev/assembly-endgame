import { useState } from 'react'
import type { GameState } from '../types/game'
import { wordsData } from '../data/words'

export const useGameLogic = () => {
  // ---------  State ----------
  const [state, setState] = useState<GameState>({
    word: selectRandomWord(),
    guesses: [],
    lives: 8,
    status: 'playing',
  })

  // ---------- Actions ----------
  const guessLetter = (letter: string) => {
    if (state.guesses.includes(letter) || state.status !== 'playing') return

    setState((prev) => {
      const newGuesses = [...prev.guesses, letter]
      const newLives = prev.word.includes(letter) ? prev.lives : prev.lives - 1

      // 2️⃣ تحديث الحالة
      const newStatus = prev.word.split('').every((l) => newGuesses.includes(l))
        ? 'win'
        : newLives === 0
          ? 'lose'
          : 'playing'

      return {
        ...prev,
        guesses: newGuesses,
        lives: newLives,
        status: newStatus,
      }
    })
  }

  const resetGame = (): void => {
    const word = selectRandomWord()
    setState({
      word: word,
      guesses: [],
      lives: 8,
      status: 'playing',
    })
  }

  return {
    state,
    guessLetter,
    resetGame,
  }
}

const selectRandomWord = () => {
  const randomNumber = Math.floor(Math.random() * wordsData.length)
  return wordsData[randomNumber]
}
