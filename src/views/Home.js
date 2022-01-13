import avatar from "../assets/avatar.jpg"
import "../styles/home.css"

function Home() {
    return (
        <div className="text-center container px-3">
            <h1 className="font-semibold text-purpledark text-xl md:text-2xl">Игры с мемами для друзей!</h1>

            <div
                className="flex mx-auto flex-wrap justify-center text-sm text-purpledark px-5 py-3 mt-3 shadow-straight rounded-full w-full md:w-1/2 xl:w-1/3 md:text-base xl:text-lg">
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
            {/*TODO: Карусель с мемами для мобилки и фоновые для ПК*/}
            <div className="mt-[20vh] shadow-straight text-center rounded-2xl p-3.5 w-full md:w-1/2 xl:w-1/3  mx-auto">
                <span className="text-purpledark font-semibold text-xl">Кто ты сегодня?</span>
                <div className="flex flex-col md:flex-row mt-2">
                    <div className="relative w-1/2 mx-auto">
                        <div className="change aspect-square rounded-full flex p-2.5 cursor-pointer absolute btn bottom-0 right-0">
                            <span className="material-icons-outlined m-auto text-">replay</span>
                        </div>
                        <div className="aspect-square rounded-full border-gray-300 border overflow-hidden">
                            <img src={avatar} alt="" className="w-full object-cover"/>
                        </div>
                    </div>

                    <div className="w-full md:ml-10 md:my-auto">
                        <input type="text" name="username" autoComplete="off" id=""
                               className="form-control text-center mt-2 w-full" placeholder="Придумай имя"/>
                        <button className="mt-2 btn w-full text-lg transition shadow-straight">Поехали!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
