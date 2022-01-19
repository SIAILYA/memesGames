import {declOfNum} from "../utils";
import {CHANGE_INPUT_GAME_ID, JOIN_GAME} from "../redux/types";
import {useDispatch} from "react-redux";

export default ({gameID, playersCount, state}) => {
    const dispatch = useDispatch()

    return (
        <div className="shadow-straight w-full p-3 rounded-xl">
            <h2 className="font-semibold">#{gameID}</h2>
            <div className="flex justify-center">
                <span className="material-icons-outlined mr-2 text-accent-dark">groups</span>
                <span>{playersCount} {declOfNum(playersCount, ["игрок", "игрока", "игроков"])}</span>
            </div>
            <div className="flex justify-center mt-1 ">
                <span className="material-icons-outlined mr-2 text-accent-dark">loop</span>
                <span>{state}</span>
            </div>

            <button onClick={() => {
                dispatch({type: CHANGE_INPUT_GAME_ID, payload: gameID})
                dispatch({type: JOIN_GAME})
            }}
                    className="btn mt-3">Присоединиться
            </button>
        </div>
    )
}
