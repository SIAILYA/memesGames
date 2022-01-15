import UsersPanel from "../GameBoard/PlayersPanel";
import SettingsPanel from "../GameBoard/SettingsPanel";
import GameState from "../GameBoard/GameState";
import GameTable from "./GameTable";

const GameBoardMemes = () => {
    return (
        <div className="px-3 flex flex-col lg:flex-row">
            <div className="w-full lg:w-36 flex justify-between lg:justify-start lg:flex-col">
                <UsersPanel/>
                <SettingsPanel/>
            </div>
            <div className="play-board w-full lg:pl-8 ">
                <GameState/>
                <GameTable/>
            </div>
        </div>
    )
}

export default GameBoardMemes;
