import GameBoard from "./components/GameBoard"
import Header from "./components/Header"
import Keyboard from "./components/Keyboard"
import { useGameLogic } from "./hooks/useGameLogic"


function App() {
  const { state, guessLetter, resetGame } = useGameLogic()

  console.log("state", state);
  console.log("state", state.word);





  return (
    <div className="bg-zinc-900 h-dvh font-display">
      <div className=" border max-w-4xl h-full m-auto p-4 flex flex-col justify-center items-center ">
        <Header />
        <GameBoard guesses={state.guesses} word={state.word} lives={state.lives} status={state.status} />
        <Keyboard guessLetter={guessLetter} guesses={state.guesses} word={state.word} />
        {
          state.status !== 'playing' &&
          <button
            onClick={resetGame}
            className="w-50 py-2 cursor-pointer hover:bg-sky-500 transition-colors duration-200 text-lg font-medium rounded-lg tracking-wider mt-5 bg-sky-400"
          >New Game</button>
        }
      </div>
    </div>
  )
}

export default App
