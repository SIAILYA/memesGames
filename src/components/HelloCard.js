import {useSelector} from "react-redux";

export default ({className}) => {
    const currentUserName = useSelector(state => state.currentUser.name)
    const currentUserAvatar = useSelector(state => state.currentUser.avatar)

    return (
        <div className={"card text-center " + className}>
            <h2 className="header">Привет, {currentUserName}!</h2>
            <img src={"/avatars/" + currentUserAvatar + ".jpg"} alt="" className="rounded-full border object-cover border-gray-300 aspect-square w-24 mx-auto overflow-hidden"/>
        </div>
    )
}
