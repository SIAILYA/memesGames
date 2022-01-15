import meme from "../../assets/meme1.jpg"
import UserCards from "../GameBoard/UserCards";
import AcceptedPlayer from "../GameBoard/AcceptedPlayer";
import PlayersAnswers from "../GameBoard/PlayersAnswers";

const GameTable = () => {
    return (
        <div className="mx-auto mt-4">
            <div
                className="overflow-hidden rounded-xl mx-auto w-full md:w-2/3 lg:w-1/2 transition lg:hover:scale-125 lg:hover:shadow-2xl">
                <img src={meme} className="object-cover w-full" alt=""/>
            </div>
            <div className="mx-auto flex justify-center mt-3">
                <AcceptedPlayer/>
            </div>
            <div className="mt-6">
                <PlayersAnswers/>
            </div>
            <div className="mt-8 pb-8">
                <UserCards/>
            </div>
        </div>
    )
}

export default GameTable;
