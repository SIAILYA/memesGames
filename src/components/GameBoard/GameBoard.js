import UsersPanel from "./PlayersPanel";
import SettingsPanel from "./SettingsPanel";
import GameState from "./GameState";
import GameTableTextToPicture from "../GameboardTextToPicture/GameTableTextToPicture";
import {useSelector} from "react-redux";

const GameBoard = () => {
    const mode = useSelector(state => state.game.mode)

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
