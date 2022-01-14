import PublicGame from "../components/PublicGame";
import HelloCard from "../components/HelloCard";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

function StartGame() {
    const currentUserName = useSelector(state => state.currentUser.name)
    let navigate = useNavigate();

    useEffect(() => {
        if (!currentUserName) {
            navigate("/")
        }
    }, [])

    return (
        <div className="container flex flex-col md:flex-row xl:w-5/6 2xl:w-3/4 mx-auto px-3">
            <div className="md:w-full md:mr-8">
                <HelloCard className="md:hidden mb-4 md:mb-0"/>
                <div className="shadow-straight p-3 rounded-xl text-center">
                    <h2 className="text-xl font-semibold text-accent-dark">Начнем?</h2>
                    <div className="flex mt-4 flex-col lg:flex-row">
                        <div className="grow mb-3 lg:m-0 text-lg">
                            <h3 className="font-semibold mb-2">Залетай в комнату!</h3>
                            <div className="w-full flex form-btn-inline">
                                <input type="text" className="form-control text-center w-full"
                                       placeholder="ID комнаты"/>
                                <button className="btn aspect-square flex shadow-straight"><span
                                    className="material-icons-outlined my-auto text-[20px]">chevron_right</span></button>
                            </div>
                        </div>
                        <div className="text-gray-500 flex mx-3">
                            <span className="m-auto">
                                - или -
                            </span>
                        </div>
                        <div className="grow mt-3 lg:m-0 text-lg">
                            <h3 className="font-semibold mb-2 whitespace-nowrap">Создай свою!</h3>
                            <div className="btn h-100">Создать</div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <h2 className="text-accent-dark mb-3 font-semibold text-lg lg:text-2xl">Присоединяйся к открытым
                        комнатам!</h2>
                    <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-3">
                        <PublicGame/>
                    </div>
                </div>
            </div>

            <div className="md:w-3/4 mt-4 md:mt-0">
                <HelloCard className="hidden md:block"/>
                <div className="card md:mt-4">
                    <h3 className="header text-center text-lg lg:text-2xl">Как играть</h3>
                    {/*    TODO: Как играть*/}
                </div>
            </div>
        </div>
    )
}

export default StartGame;
