import { KEYBOARD } from "../data/words"
const Keyboard = () => {

    return (
        <div className=" max-w-2xl p-4 flex flex-wrap gap-1 justify-center">
            {
                KEYBOARD.map((letter) => (
                    <button key={letter}
                        className="
                        bg-yellow-500 w-14 h-14
                        rounded-md text-xl font-medium
                        cursor-pointer
                        hover:bg-amber-600
                        transition-colors duration-200
                    "
                    >
                        {letter}
                    </button>
                ))
            }
        </div>
    )
}

export default Keyboard