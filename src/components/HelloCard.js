import {useSelector} from "react-redux";

export default ({className}) => {
    const currentUserName = useSelector(state => state.currentUser.name)

    return (
        <div className={"card text-center " + className}>
            <h2 className="header">Привет, {currentUserName}!</h2>
        </div>
    )
}
