import HelloCard from "../components/HelloCard";
import Toggle from "../components/UI/Toggle";
import LobbyPlayer from "../components/LobbyPlayer";
import {useSelector} from "react-redux";
import {useState} from "react";

const Lobby = () => {
    const gameId = useSelector(state => state.game.gameId)
    const gamePlayers = useSelector(state => state.game.players)

    const [copy, setCopy] = useState(false)

    const copyGameInvite = () => {
        navigator.clipboard.writeText("Давно тебя не было в MemesGames!\n\nЗаходи!\nhttps://memesgames.ru/invite?gameid=" + gameId)

        setCopy(true)
    }

    return (
        <div className="px-3">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                <div>
                    <HelloCard/>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <button className="btn flex w-full text-center justify-center">
                            <span className="material-icons-outlined mr-2 my-auto">logout</span>
                            <span className="my-auto">Выход</span>
                        </button>
                        <button className="btn flex w-full text-center justify-center">
                            <span className="material-icons-outlined mr-2 my-auto">delete</span>
                            <span className="my-auto">Удалить лобби</span>
                        </button>
                    </div>
                    <div className="card mt-4">
                        <h3 className="header text-center">Игроки в лобби</h3>
                        <h2 className="text-accent-dark text-center text-lg">{gamePlayers.length}/8 игроков</h2>
                        <div className="mt-3">
                            {
                                gamePlayers.map(player => {
                                    return (<LobbyPlayer key={player._id} name={player.name} avatar={player.avatar}
                                                         id={player._id}/>)
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
                            <Toggle caption="Разрешить присоединяться посторонним людям"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lobby
