
const GameBoard = () => {
    return (
        <div className="min-w-lg  flex flex-col items-center mb-10">
            <div className="w-full bg-green-500 p-3 text-center text-zinc-200 rounded-xl mb-8">
                <p className="text-2xl font-light ">You win!</p>
                <p className="text-md">Will done</p>
            </div>

            <div className=" flex flex-wrap gap-0.5 max-w-sm  justify-center items-center mb-8">
                <span className="p-2 font-medium rounded-sm bg-orange-500 text-white">HTML</span>
                <span className="p-2 font-medium rounded-sm bg-blue-500 text-white">CSS</span>
                <span className="p-2 font-medium rounded-sm bg-yellow-300 ">Javascript</span>
                <span className="p-2 font-medium rounded-sm bg-sky-400">React</span>
                <span className="p-2 font-medium rounded-sm bg-sky-800 text-white">Typescript</span>
                <span className="p-2 font-medium rounded-sm bg-green-800 text-white">Node.js</span>
                <span className="p-2 font-medium rounded-sm bg-fuchsia-700 text-white">Python</span>
                <span className="p-2 font-medium rounded-sm bg-lime-500 text-white">Assembly</span>
            </div>

            <div className="flex w-full px-4 gap-x-1 text-zinc-50">
                <p className="bg-zinc-800 rounded-t p-3 px-5 font-medium border-b-2 border-zinc-400  text-2xl">R</p>
                <p className="bg-zinc-800 rounded-t p-3 px-5 font-medium border-b-2 border-zinc-400  text-2xl">R</p>
                <p className="bg-zinc-800 rounded-t p-3 px-5 font-medium border-b-2 border-zinc-400  text-2xl">R</p>
                <p className="bg-zinc-800 rounded-t p-3 px-5 font-medium border-b-2 border-zinc-400  text-2xl">R</p>
                <p className="bg-zinc-800 rounded-t p-3 px-5 font-medium border-b-2 border-zinc-400  text-2xl">R</p>
                <p className="bg-zinc-800 rounded-t p-3 px-5 font-medium border-b-2 border-zinc-400  text-2xl">R</p>
                <p className="bg-zinc-800 rounded-t p-3 px-5 font-medium border-b-2 border-zinc-400  text-2xl">R</p>
                <p className="bg-zinc-800 rounded-t p-3 px-5 font-medium border-b-2 border-zinc-400  text-2xl">R</p>
            </div>
        </div>
    )
}

export default GameBoard