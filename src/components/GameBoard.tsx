
import { techStack } from '../data/words';

import Skull from '../assets/Skull.svg'
interface gameBoardProps {
    word: string
    guesses: string[]
    lives: number
}
const GameBoard = ({ guesses, word, lives }: gameBoardProps) => {

    const secreteWord = word.split('')
    const MAX_LIVES = 8;
    const deadCount = MAX_LIVES - lives;


    console.log('lives =>> ', lives);
    console.log({
        lives,
        deadCount
    });


    return (
        <div className="min-w-lg  flex flex-col items-center mb-10">
            <div className="w-full bg-green-500 p-3 text-center text-zinc-200 rounded-xl mb-8">
                <p className="text-2xl font-light ">You win!</p>
                <p className="text-md">Will done</p>
            </div>

            <div className="flex flex-wrap gap-0.5 max-w-sm justify-center items-center mb-8">
                {techStack.map((tech, index) => {
                    const isDead = index < deadCount

                    return (
                        <span
                            key={tech.name}
                            className={`
                                p-2 font-medium rounded-sm ${tech.className}
                                relative overflow-hidden
                            `}
                        >
                            {tech.name}

                            {isDead && (
                                <>
                                    {/* Overlay */}
                                    <span className="absolute inset-0 bg-black/70" />

                                    {/* Skull */}
                                    <img
                                        src={Skull}
                                        alt="skull"
                                        className="
                                            w-8
                                            absolute
                                            top-1/2 left-1/2
                                            -translate-x-1/2 -translate-y-1/2
                                        "
                                    />
                                </>
                            )}
                        </span>
                    )
                })}
            </div>


            <div className="flex max-w-lg h-15  px-4 gap-x-1 text-zinc-50">
                {
                    secreteWord.map((letter, index) => (
                        <p
                            key={`${letter}-${index}`}
                            className="
                            bg-zinc-800 rounded-t w-14 
                            flex justify-center items-center 
                            font-medium border-b-2 border-zinc-400 
                            h-full text-xl
                            "
                        ><span
                            className={
                                `${!guesses.filter(l => secreteWord.includes(l)).includes(letter) ? 'hidden' : null}`
                            }
                        >{letter}</span></p>
                    ))
                }
            </div>
        </div>
    )
}

export default GameBoard