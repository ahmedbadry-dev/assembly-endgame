import { KEYBOARD } from "../data/words"
interface KeyboardProps {
    word: string
    guesses: string[]
    guessLetter: (letter: string) => void
}
const Keyboard = ({ guessLetter, guesses, word }: KeyboardProps) => {

    const wordLetters = word.split('')

    // correct letter
    const correctLetter = guesses.filter(letter => (
        wordLetters.includes(letter)
    ))

    // wrong letter
    const wrongLetter = guesses.filter(letter => (
        !wordLetters.includes(letter)
    ))

    console.log(correctLetter);
    console.log(wrongLetter);



    return (
        <div className="md:max-w-2xl p-4 flex flex-wrap gap-1 justify-center">
            {
                KEYBOARD.map((letter) => (
                    <button key={letter}
                        disabled={guesses.includes(letter.toLowerCase())}
                        onClick={() => guessLetter(letter.toLowerCase())}
                        className={`
                            ${correctLetter.includes(letter.toLowerCase()) ? 'bg-green-500'
                                : wrongLetter.includes(letter.toLowerCase()) ? 'bg-red-500'
                                    : 'bg-yellow-500'
                            }
                        disabled:cursor-not-allowed
                        md:w-14 md:h-14
                        w-8 h-8
                        rounded-md text-xl font-medium
                        cursor-pointer
                        transition-colors duration-200
                    `}
                    >
                        {letter}
                    </button>
                ))
            }
        </div>
    )
}

export default Keyboard