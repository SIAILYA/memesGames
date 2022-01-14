import {useNavigate} from "react-router-dom";

export default () => {
    let navigate = useNavigate();

    return (
        <div className="px-3">
            <h1 className="header text-center mb-3">Ничего не нашлось</h1>
            <img src="https://http.cat/404" className="md:w-1/2 mx-auto rounded-xl shadow-straight" alt=""/>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mx-auto">
                <button onClick={() => {
                    navigate("/")
                }} className="btn mt-5 block text-center w-full">
                    Вернуться домой
                </button>
            </div>
        </div>
    )
}
