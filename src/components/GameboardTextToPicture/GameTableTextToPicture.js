import UserCards from "../GameBoard/UserCards";
import PlayersAnswersTextToPicture from "./PlayersAnswersTextToPicture";
import TextCard from "../GameBoard/TextCard";
import {SET_USER_ANSWER} from "../../redux/types";
import {useDispatch, useSelector} from "react-redux";
import meme from "../../assets/meme1.jpg"

const GameTableTextToPicture = () => {
    const playCards = useSelector(state => state.game.playCards)
    const answer = useSelector(state => state.currentUser.answer)
    const roundPayload = useSelector(state => state.game.roundPayload)

    const dispatch = useDispatch()


    return (
        <div className="mx-auto mt-4">
            {
                roundPayload ?
                    <div
                        className="overflow-hidden shadow-straight rounded-xl mx-auto w-full md:w-2/3 lg:w-1/2 transition lg:hover:scale-125 lg:hover:shadow-2xl">
                        <img src={roundPayload.filename} className="object-cover w-full" alt=""/>
                    </div>
                    :
                    <div
                        className="overflow-hidden rounded-xl mx-auto w-full md:w-2/3 lg:w-1/2 transition lg:hover:scale-125 lg:hover:shadow-2xl">
                        <img src={meme} className="object-cover w-full" alt=""/>
                    </div>
            }
            <div className="mt-6">
                <PlayersAnswersTextToPicture/>
            </div>
            <div className="mt-8 pb-8">
                <UserCards cardsReady={playCards.length > 0}>
                    {
                        playCards.map((playCard, index) => {
                            return (
                                <TextCard
                                    key={index}
                                    text={playCard.text}
                                    onClick={() => {
                                        dispatch({
                                            type: SET_USER_ANSWER,
                                            payload: {
                                                payload: playCard.text,
                                                payloadId: playCard._id,
                                                type: "TextCard",
                                                index: index
                                            }
                                        })
                                    }}
                                    className="animate-fade"
                                    index={index}
                                    disableChoose={answer !== null}
                                    isSelected={index === answer}
                                />
                            )
                        })
                    }
                </UserCards>
            </div>
        </div>
    )
}

export default GameTableTextToPicture;
