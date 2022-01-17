import {useSelector} from "react-redux";

const GameState = () => {
    const gameState = useSelector(state => state.game.state)
    const gameTimer = useSelector(state => state.game.timer)

    return (
        <div className="mt-4">
            <h1 className="text-xl md:text-2xl text-center text-accent-dark font-semibold">{gameState}</h1>
            <div className="w-full xl:w-2/3 mx-auto 2xl:w-1/2 h-3 lg:h-4 px-1 py-0.5 border-gray-300 border rounded-full mt-3">
                <div className="w-full h-full bg-gradient-accent rounded-full transition-all run-timer" style={{animationDuration: gameTimer + "ms"}}/>
            </div>
        </div>
    )
}

export default GameState;
