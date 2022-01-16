import {useRef} from "react";

import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {fetchCurrentUserAvatar, setCurrentUserName} from "../redux/actions/currenUserActions";
import FloatingMeme from "../components/FloatingMeme";

import avatar from "../assets/avatar.jpg"

import "../styles/background.css"

const Home = () => {
    const dispatch = useDispatch()
    const currentUserName = useSelector(state => state.currentUser.name)
    const currentUserAvatar = useSelector(state => state.currentUser.avatar)
    let navigate = useNavigate();
    const nameInput = useRef()

    return (
        <div className="text-center container px-3 pt-5">
            <h1 className="font-semibold text-accent-dark text-xl md:text-2xl">Игры с мемами для друзей!</h1>
            <div
                className="flex mx-auto flex-wrap justify-center text-sm text-accent-dark px-5 py-3 mt-3 shadow-straight
                rounded-full w-full md:w-1/2 xl:w-1/3 md:text-base xl:text-lg bg-white"
            >
                <div className="flex flex-col justify-center w-1/3">
                    <span className="material-icons-outlined my-auto">wifi</span>
                    <div className="text-center my-auto leading-none mt-1">Играйте<br/>онлайн</div>
                </div>
                <div className="flex flex-col justify-center w-1/3">
                    <span className="material-icons-outlined my-auto">groups</span>
                    <div className="text-center my-auto leading-none mt-1">3-10<br/>игроков</div>
                </div>
                <div className="flex flex-col justify-center w-1/3">
                    <span className="material-icons-outlined my-auto">all_inclusive</span>
                    <div className="text-center my-auto leading-none mt-1">Играйте<br/>бесконечно</div>
                </div>
            </div>
            <div
                className="mt-[10vh] md:mt-[20vh] shadow-straight bg-white text-center rounded-2xl p-3.5 w-full md:w-1/2 xl:w-1/3  mx-auto">
                <span className="text-accent-dark font-semibold text-xl">Кто ты сегодня?</span>
                <div className="flex flex-col md:flex-row mt-2">
                    <div className="relative w-1/2 mx-auto">
                        <button
                            onClick={() => dispatch(fetchCurrentUserAvatar())}
                            className="change aspect-square rounded-full flex p-2.5 cursor-pointer shadow-straight absolute btn bottom-0 right-0">
                            <span className="material-icons-outlined m-auto text-">replay</span>
                        </button>
                        <div className="aspect-square rounded-full border-gray-300 border overflow-hidden">
                            <img src={"/avatars/" + (currentUserAvatar) + ".jpg"} alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>

                    <div className="w-full md:ml-10 md:my-auto">
                        <input type="text" name="username" autoComplete="off" ref={nameInput}
                               value={currentUserName}
                               onFocus={() => {nameInput.current.classList.remove("form-invalid")}}
                               onInput={(e) => dispatch(setCurrentUserName(e.currentTarget.value))}
                               className="form-control text-center mt-2 w-full" placeholder="Придумай имя"/>
                        <button className="mt-2 btn w-full text-lg transition shadow-straight" onClick={() => {
                            dispatch(setCurrentUserName(currentUserName.trim()))
                            if (currentUserName !== "") {
                                console.log(currentUserName)
                                navigate("/startgame")
                            } else {
                                nameInput.current.focus()
                                nameInput.current.classList.add("form-invalid")
                            }
                        }}>Поехали!
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="area -z-20">
                    <ul className="circles">
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                        <li/>
                    </ul>
                </div>

                <FloatingMeme className="hidden md:block top-44 left-12" id="fm-1"/>
                <FloatingMeme className="hidden md:block top-80 right-20" id="fm-2"/>
                <FloatingMeme className="hidden md:block bottom-32 left-56" id="fm-3"/>
            </div>
        </div>
    );
}


export default Home;
