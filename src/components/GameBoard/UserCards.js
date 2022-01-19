const UserCards = ({children, cardsReady = false, caption = "Выбирай самую смешную подпись к этому мему!"}) => {
    return (
        <>
            {
                cardsReady &&
                <h2 className="text-center text-gray-500 mb-3">{caption}</h2>
            }
            <div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {children}
            </div>
        </>
    )
}

export default UserCards;
