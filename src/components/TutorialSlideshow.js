import {useEffect, useState} from "react";

import TutorialSlide from "./TutorialSlide";

import tutorialCall from "../assets/tutorial_call.png";
import tutorialRoom from "../assets/tutorial_room.jpg";
import tutorialGet from "../assets/tutorial_get.jpg";
import tutorialLaugh from "../assets/tutorial_laugh.png";
import tutorialLast from "../assets/tutorial_last.png";

export default () => {
    const [tutorialActiveSlide, setTutorialActiveSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setTutorialActiveSlide(prevSlide => (prevSlide + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    });

    const slides = [
        {
            img: tutorialRoom,
            caption: "Заходите в комнату",
            description: "Создай новое лобби или попроси друзей. Это бесплатно!"
        },
        {
            img: tutorialCall,
            caption: "Устройте созвон",
            description: "Расчехляйте свой Дискорд и звоните друзьям! Так веселее и интересней!"
        },
        {
            img: tutorialGet,
            caption: "Получите, распишитесь",
            description: "Каждому игроку выдается по 7 карт с подписями"
        },
        {
            img: tutorialLaugh,
            caption: "Мемы смешные",
            description: "Каждый раунд на стол случайным образом выбирается мем"
        },
        {
            img: "",
            caption: "И тамада интересный",
            description: "Твоя задача - выбрать самую смешную подпись к мему на столе"
        }
    ]

    return (
        <div className="card relative">
            <h3 className="header text-center text-lg lg:text-2xl">Как играть</h3>

            <div className="mt-3 w-full">
                {
                    slides.map((slide, index) => {
                        return (
                            <TutorialSlide isActive={tutorialActiveSlide === index}
                                           img={slide.img || tutorialCall}
                                           caption={slide.caption}
                                           description={slide.description}
                                           key={index}
                            />
                        )
                    })
                }
            </div>

            <div className="flex justify-center">
                {
                    slides.map((slide, index) => {
                        return (
                            <div
                                className={"slide-dot mx-2 h-4 w-4 rounded-full cursor-pointer border-blue-500 border-2 " + (index === tutorialActiveSlide ? "bg-blue-500" : "")}
                                key={index}
                                onClick={
                                    () => {
                                        setTutorialActiveSlide(index)
                                    }
                                }/>
                        )
                    })
                }
            </div>
        </div>
    )
}
