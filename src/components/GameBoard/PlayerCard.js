import defaultAvatar from "../../assets/avatar.jpg"

const PlayerCard = ({isAdmin, name, avatar, score, isLead}) => {

    return (
        <div className="text-center flex flex-col mb-2">
            <div className="relative">
                <img src={avatar || defaultAvatar}
                     className={"mx-auto aspect-square object-cover h-24 rounded-full " + (isAdmin ? "border-2 border-accent-dark" : "border border-gray-300")}
                     alt=""/>
                <div className="absolute bg-gradient-accent rounded-full aspect-square bottom-0 right-0 flex p-2 h-8">
                    <div className="mx-auto mt-[-8px] text-white font-semibold text-lg">{score || 0}</div>
                </div>
                <div className={"absolute bg-gradient-accent rounded-full aspect-square top-0 right-2 flex p-1 h-6 " + (isLead ? "" : "hidden")}>
                    <span className="material-icons-outlined text-white m-auto text-sm -mt-0.5">star</span>
                </div>
            </div>
            <div className="text-lg mt-2 whitespace-nowrap overflow-hidden w-full text-ellipsis">
                {name}
            </div>
        </div>
    )
}

export default PlayerCard;
