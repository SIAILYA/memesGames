const GameState = () => {
    return (
        <div className="mt-4">
            <h1 className="text-xl md:text-2xl text-center text-accent-dark font-semibold">Ждём, пока все выберут карты</h1>
            <div className="w-full xl:w-2/3 mx-auto 2xl:w-1/2 h-3 lg:h-4 px-1 py-0.5 border-gray-300 border rounded-full mt-3">
                <div className="w-full h-full bg-gradient-accent rounded-full transition-all" style={{width: "12%"}}/>
            </div>
        </div>
    )
}

export default GameState;
