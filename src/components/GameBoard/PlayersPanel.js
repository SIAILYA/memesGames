import PlayerCard from "./PlayerCard";

const playersPanel = () => {
    return (
        <div>
            <div className="w-full max-h-[50vh] overflow-auto card hidden lg:block">
                <div className="">
                    <PlayerCard name="Путин123 123"/>
                    <PlayerCard name="Путин123 123"/>
                    <PlayerCard name="Путин123 123"/>
                    <PlayerCard name="Путин123 123"/>
                    <PlayerCard name="Путин123 123"/>
                    <PlayerCard name="Путин123 123"/>
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

export default playersPanel;
