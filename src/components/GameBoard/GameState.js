import {useSelector} from "react-redux";
import {useEffect, useRef} from "react";

const GameState = () => {
    const gameState = useSelector(state => state.game.state)
    const gameTimer = useSelector(state => state.game.timer)

    const progressBarRef = useRef()

    useEffect(() => {
        console.log("Start progressBar")
        startProgressBar()
    }, [gameTimer])

    function startProgressBar() {
        let el = progressBarRef.current
        console.log(gameTimer)

        el.style.transitionDuration = "0ms"
        el.style.width = "100%"

        setTimeout(() => {
            el.style.transitionDuration = (gameTimer || 5000) + "ms"
            el.style.width = "0"
        }, 200)
    }

    return (
        <div className="mt-4">
            <h1 className="text-xl md:text-2xl text-center text-accent-dark font-semibold">{gameState}</h1>
            <div className="w-full xl:w-2/3 mx-auto 2xl:w-1/2 h-3 lg:h-4 px-1 py-0.5 border-gray-300 border rounded-full mt-3">
                <div className="w-full h-full bg-gradient-accent rounded-full transition-all w-full ease-linear" ref={progressBarRef}/>
            </div>
        </div>
    )
}

export default GameState;
