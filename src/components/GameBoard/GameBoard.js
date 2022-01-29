import UsersPanel from "./PlayersPanel";
import SettingsPanel from "./SettingsPanel";
import GameState from "./GameState";
import GameTableTextToPicture from "../GameboardTextToPicture/GameTableTextToPicture";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const GameBoard = () => {
    const mode = useSelector(state => state.game.mode)

    const navigate = useNavigate()
    const currentUserName = useSelector(state => state.currentUser.name)


    useEffect(() => {
        console.log(123)
        if (!currentUserName) {
            navigate("/")
        }
    }, [])

    return (
        <div className="px-3 flex flex-col lg:flex-row">
            <div className="w-full lg:w-36 flex justify-between lg:justify-start lg:flex-col">
                <UsersPanel/>
                <SettingsPanel/>
            </div>
            <div className="play-board w-full lg:pl-8 ">
                <GameState/>
                {/*TODO: Вынести в универсальный GameTable*/}
                {
                    mode === "texttomeme" &&
                    <GameTableTextToPicture/>
                }
            </div>
        </div>
    )
}

export default GameBoard;
