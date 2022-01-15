import avatar from "../../assets/avatar.jpg";

const PlayerAcceptAvatar = ({accepted=false}) => {
    return (
        <div className={"overflow-hidden transition-all " + (accepted ? "h-8" : "h-0")}>
            <div className="rounded-full border border-gray-300 aspect-square overflow-hidden mx-1 w-8">
                <img src={avatar} className="object-cover" alt=""/>
            </div>
        </div>
    )
}

export default PlayerAcceptAvatar;
