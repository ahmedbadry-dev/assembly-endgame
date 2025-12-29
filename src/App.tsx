import GameBoard from "./components/GameBoard"
import Header from "./components/Header"
import Keyboard from "./components/Keyboard"


function App() {

  return (
    <div className="bg-zinc-900 h-dvh font-display">
      <div className=" border max-w-4xl h-full m-auto p-4 flex flex-col justify-center items-center ">
        <Header />
        <GameBoard />
        <Keyboard />
      </div>
    </div>
  )
}

export default App
