import meme from "../assets/meme1.jpg"
import "./styles/floating-meme-animation.css"

const FloatingMeme = ({pic=meme, caption="Когда сгорела школа", className="", id=""}) => {
    return (
        <div className={"absolute -z-10 shadow-xl floating-meme " + className} id={id}>
            <div className="relative">
                <div className="aspect-video bg-white rounded-xl w-80 xl:w-96 -z-10 overflow-hidden">
                    <img src={pic} className="object-cover opacity-50 object-center h-full w-full" alt=""/>
                </div>
            </div>
            <div className="absolute -bottom-5 text-gray-500 -right-7 px-3 py-3 rounded-full shadow-straight bg-white text-xl leading-none max-w-[80%]">{caption}</div>
        </div>
    )
}

export default FloatingMeme;
