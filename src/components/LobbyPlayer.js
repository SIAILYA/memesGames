import avatar from "../assets/avatar.jpg"

const LobbyPlayer = ({name, avatar, id}) => {
    return (
        <div className="w-full flex mb-2 border-b pb-2">
            <img src={"/avatars/" + avatar + ".jpg"} className="w-16 object-cover round-avatar" alt=""/>
            <div className="my-auto text-xl text-ellipsis whitespace-nowrap overflow-hidden ml-3 pr-3">
                {name}
            </div>
            <button className="btn flex mx-auto my-auto ml-auto mr-0" disabled onClick={() => {
                console.log(id)}}>
                <span className="material-icons-outlined mr-2 my-auto">highlight_off</span>
                <span className="my-auto">Исключить</span>
            </button>
        </div>
    )
}

export default LobbyPlayer;
