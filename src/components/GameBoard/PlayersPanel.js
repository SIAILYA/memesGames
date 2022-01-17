import PlayerCard from "./PlayerCard";
import {useSelector} from "react-redux";

const PlayersPanel = () => {
    const players = useSelector(state => state.game.players)

    return (
        <div>
            <div className="w-full max-h-[50vh] overflow-auto card hidden lg:block">
                <div className="">
                    {
                        players.map(player => {
                            return (
                                <PlayerCard name={player.name} isAdmin={player.admin} avatar={player.avatar} isLead={player.isLead} score={player.score}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className="lg:hidden">
                <button className="btn flex">
                    <span className="material-icons-outlined mr-2 my-auto">people_outline</span>
                    <span className="my-auto">
                        Игроки
                    </span>
                </button>
            </div>
        </div>
    )
}

export default PlayersPanel;
