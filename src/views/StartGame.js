import PublicGame from "../components/PublicGame";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import "../styles/startgame.css"
import TutorialSlideshow from "../components/TutorialSlideshow";
import axios from "axios";
import {BACKEND} from "../config";
import {createGame} from "../redux/actions/gameActions";
import {hideLobbyCreatingSpinner, showLobbyCreatingSpinner} from "../redux/actions/appActions";
import {connectRoom} from "../sockets/connectors";

function StartGame() {
    const currentUserName = useSelector(state => state.currentUser.name)
    const currentUserAvatar = useSelector(state => state.currentUser.avatar)
    const createLobbySpinner = useSelector(state => state.app.createLobbySpinner)

    const dispatch = useDispatch()
    let navigate = useNavigate();

    const [roomId, setRoomId] = useState("")

    useEffect(() => {
        if (!currentUserName) {
            navigate("/")
        } else {
            window.onbeforeunload = () => {
                return "Стой! Введенные данные не сохранятся при перезагрузке!"
            }
        }
    }, [])

    function initGame() {
        dispatch(createGame(currentUserName, currentUserAvatar, () => {navigate("/lobby")}))
    }

    function connect() {
        connectRoom(roomId, currentUserName, currentUserAvatar)

        navigate("/lobby")
    }

    return (
        <div className="container flex flex-col md:flex-row xl:w-5/6 2xl:w-3/4 mx-auto px-3">
            <div className="md:w-full md:mr-8">
                {/*<HelloCard className="md:hidden mb-4 md:mb-0"/>*/}
                <div className="shadow-straight p-3 rounded-xl text-center">
                    <h2 className="text-xl font-semibold text-accent-dark">Начнем?</h2>
                    <div className="flex mt-4 flex-col lg:flex-row">
                        <div className="grow mb-3 lg:m-0 text-lg">
                            <h3 className="font-semibold mb-2">Залетай в комнату!</h3>
                            <div className="w-full flex form-btn-inline">
                                <input type="text" className="form-control text-center w-full"
                                       placeholder="ID комнаты" onChange={(e) => setRoomId(e.target.value)}
                                />
                                <button className="btn aspect-square flex shadow-straight" onClick={() => {connect()}}><span
                                    className="material-icons-outlined my-auto text-[20px]">chevron_right</span>
                                </button>
                            </div>
                        </div>
                        <div className="text-gray-500 flex mx-3">
                            <span className="m-auto">
                                - или -
                            </span>
                        </div>
                        <div className="grow mt-3 lg:m-0 text-lg">
                            <h3 className="font-semibold mb-2 whitespace-nowrap">Создай свою!</h3>
                            <button onClick={() => {initGame()}} className="btn w-full">
                                {
                                    createLobbySpinner ?
                                        <span className="material-icons-outlined animate-spin my-auto mx-auto">loop</span>
                                    :
                                        "Создать"
                                }
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <h2 className="text-accent-dark mb-3 font-semibold text-lg lg:text-2xl">Присоединяйся к открытым
                        комнатам!</h2>
                    <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-3">
                        <PublicGame/>
                    </div>
                </div>
            </div>

            <div className="md:w-3/4 mt-4 md:mt-0">
                {/*<HelloCard className="hidden md:block"/>*/}
                <TutorialSlideshow/>
            </div>
        </div>
    )
}

export default StartGame;
