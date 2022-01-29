import HelloCard from "../components/HelloCard";
import Toggle from "../components/UI/Toggle";
import LobbyPlayer from "../components/LobbyPlayer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {updateAllowForeign} from "../redux/actions/gameActions";
import {CHANGE_INPUT_GAME_ID, KICK_PLAYER, SET_GAME_READY, START_GAME, UPDATE_SETTINGS} from "../redux/types";
import {useLocation, useNavigate} from "react-router-dom";

const Lobby = () => {
    const gameId = useSelector(state => state.game.gameId)
    const gamePlayers = useSelector(state => state.game.players)
    const allowForeign = useSelector(state => state.game.settings.allowForeign)
    const currentUserName = useSelector(state => state.currentUser.name)
    const isAdmin = useSelector(state => state.currentUser.isAdmin)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const [copy, setCopy] = useState(false)

    const copyGameInvite = () => {
        navigator.clipboard.writeText("Давно тебя не было в MemesGames!\n\nЗаходи!\nhttps://memesgames.ru/lobby?gameid=" + gameId)

        setCopy(true)
    }

    useEffect(() => {
        if (location.search && location.search.indexOf("gameid") !== -1) {
            dispatch({type: CHANGE_INPUT_GAME_ID, payload: location.search.split("=")[1]})
            dispatch({type: SET_GAME_READY})
        }

        if (!currentUserName) {
            navigate("/")
        }
    }, [])

    return (
        <div className="px-3">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                <div>
                    <HelloCard/>
                    <div className="mt-4">
                        <button
                            className="btn flex w-full text-center justify-center"
                            disabled={!isAdmin}
                            onClick={() => {
                                dispatch({type: START_GAME})
                            }}>
                            <span className="material-icons-outlined mr-2 my-auto">play_arrow</span>
                            <span className="my-auto">Старт</span>
                        </button>
                    </div>
                    <div className="card mt-4">
                        <h3 className="header text-center">Игроки в лобби</h3>
                        <h2 className="text-accent-dark text-center text-lg">{gamePlayers.length}/8 игроков</h2>
                        <div className="mt-3">
                            {
                                gamePlayers.map(player => {
                                    return (<LobbyPlayer key={player._id} name={player.name} avatar={player.avatar}
                                                         isAdmin={player.isAdmin}
                                                         id={player._id} onKick={(playerId) => {
                                        dispatch({type: KICK_PLAYER, payload: playerId})
                                    }}/>)
                                })
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <h2 className="header text-center">Зови друзей!</h2>
                        <div className="w-full mt-3">
                            <h1 className="select-text text-center text-3xl font-semibold mb-3 text-accent-dark">{gameId}</h1>
                            <button onClick={copyGameInvite} className="btn flex mx-auto shadow-straight">
                                <span className="mr-2">Копировать</span>
                                {
                                    copy ?
                                        <span className="material-icons-outlined my-auto text-[20px]">done</span>
                                        :
                                        <span className="material-icons-outlined my-auto text-[20px]">copy</span>
                                }
                            </button>
                        </div>
                        <div className="mt-4 text-center">
                            Это ID игровой комнаты
                            <br/>
                            Скопируй его и отправь друзьям - так они смогут присоединиться к игре!
                        </div>
                    </div>
                    <div className="card mt-4">
                        <h2 className="header text-center">Настройки лобби</h2>
                        <div className="mt-3">
                            <Toggle state={allowForeign} onChange={(e) => {
                                dispatch(updateAllowForeign(e.target.checked));
                                dispatch({type: UPDATE_SETTINGS})
                            }} caption="Разрешить присоединяться посторонним людям"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lobby
