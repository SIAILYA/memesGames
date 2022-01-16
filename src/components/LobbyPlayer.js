import {useSelector} from "react-redux";

const LobbyPlayer = ({name, avatar, id, onKick, isAdmin}) => {
    const isCurrentAdmin = useSelector(state => state.currentUser.isAdmin)
    const currenUserId = useSelector(state => state.currentUser.userId)

    return (
        <div className="w-full flex mb-2 border-b pb-2">
            <div className="relative">
                <img src={"/avatars/" + avatar + ".jpg"}
                     className={"w-16 object-cover round-avatar " + (id === currenUserId ? "avatar-accent-border" : "")}
                     alt=""/>
                {
                    isAdmin &&
                    <div className="aspect-square h-6 flex rounded-full absolute top-0 right-0 bg-gradient-accent">
                        <span className="material-icons-outlined m-auto text-sm text-white">star</span>
                    </div>
                }
            </div>
            <div className="my-auto text-xl text-ellipsis whitespace-nowrap overflow-hidden ml-3 pr-3">
                {name}
            </div>
            <button className="btn flex mx-auto my-auto ml-auto mr-0" disabled={!isCurrentAdmin || id === currenUserId}
                    onClick={() => {
                        onKick(id)
                    }}>
                <span className="material-icons-outlined mr-2 my-auto">highlight_off</span>
                <span className="my-auto">Исключить</span>
            </button>
        </div>
    )
}

export default LobbyPlayer;
