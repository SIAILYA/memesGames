import UsersPanel from "../GameBoard/PlayersPanel";
import SettingsPanel from "../GameBoard/SettingsPanel";
import GameState from "../GameBoard/GameState";
import GameTableTextToPicture from "./GameTableTextToPicture";

const GameBoardTextToPicture = () => {
    return (
        <div className="px-3 flex flex-col lg:flex-row">
            <div className="w-full lg:w-36 flex justify-between lg:justify-start lg:flex-col">
                <UsersPanel/>
                <SettingsPanel/>
            </div>
            <div className="play-board w-full lg:pl-8 ">
                <GameState/>
                {/*TODO: Вынести в универсальный GameTable*/}
                <GameTableTextToPicture/>
            </div>
        </div>
    )
}

export default GameBoardTextToPicture;
