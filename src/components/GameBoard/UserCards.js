import TextCard from "./TextCard";

const UserCards = () => {
    return (
        <>
            <h2 className="text-center text-gray-500 mb-3">Выбирай самую смешную подпись к этому мему!</h2>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <TextCard text="Когда мама говорит «делай что хочешь»" disableChoose={true}/>
                <TextCard text="Когда друг опять просит заплатить за него" disableChoose={true}/>
                <TextCard text="Когда тебя трахнули в подворотне" disableChoose={true}/>
                <TextCard text="Когда Филип гомосек" isSelected={true}/>
            </div>
        </>
    )
}

export default UserCards;
