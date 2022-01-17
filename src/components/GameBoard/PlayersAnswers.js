import TextCard from "./TextCard";

const PlayersAnswers = ({showAnswers=false}) => {
    return (
        <div className={"transition-all px-3 " + (showAnswers ? "h-56 overflow-x-auto" : "h-0 overflow-hidden")}>
            <h2 className="text-center text-gray-500 mb-3">Отеты</h2>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <TextCard canHover={false} text="Хуй пизда"/>
                <TextCard canHover={false} text="Джигурда"/>
                <TextCard canHover={false} text="Пиздец"/>
                <TextCard canHover={false} text="АааааББбБбввв"/>
            </div>
        </div>
    )
}

export default PlayersAnswers;
