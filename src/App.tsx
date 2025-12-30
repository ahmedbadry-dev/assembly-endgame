import GameBoard from "./components/GameBoard"
import Header from "./components/Header"
import Keyboard from "./components/Keyboard"
import { useGameLogic } from "./hooks/useGameLogic"
import Confetti from 'react-confetti'
import { useEffect, useState } from 'react'

function App() {
  const { state, guessLetter, resetGame } = useGameLogic()
  const [isWinEffect, setIsWinEffect] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })


  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  }, [])


  useEffect(() => {
    if (state.status === 'win') {
      setIsWinEffect(true)
    }
  }, [state.status])


  const handleReset = () => {
    resetGame()
    setIsWinEffect(false)
  }


  return (
    <div className="bg-zinc-900 h-screen md:h-dvh font-display">
      <div className=" max-w-4xl h-full m-auto p-4 flex flex-col justify-center items-center ">
        {isWinEffect && <Confetti width={windowSize.width} height={windowSize.height} />}
        <Header />
        <GameBoard guesses={state.guesses} word={state.word} lives={state.lives} status={state.status} />
        <Keyboard guessLetter={guessLetter} guesses={state.guesses} word={state.word} />
        {
          state.status !== 'playing' &&
          <button
            onClick={handleReset}
            className="w-50 py-2 cursor-pointer hover:bg-sky-500 transition-colors duration-200 text-lg font-medium rounded-lg tracking-wider mt-5 bg-sky-400"
          >New Game</button>
        }
      </div>
    </div>
  )
}

export default App
