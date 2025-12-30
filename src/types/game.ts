
export type GameState  = {
    lives: number,
    word: string,
    guesses: string[],
    status: 'win' | 'lose' | 'playing'
}
 