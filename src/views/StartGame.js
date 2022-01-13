function StartGame() {
    return (
        <div className="container flex flex-col md:flex-row xl:w-5/6 2xl:w-3/4 mx-auto px-3">
            <div className="md:w-full md:mr-8">
                <div className="shadow-straight p-3 rounded-xl">

                </div>
                <div className="mt-6 text-center">
                    <h2 className="text-purpledark mb-3 font-semibold text-lg lg:text-2xl">Присоединяйся к открытым
                        комнатам!</h2>
                    <div className="w-full overflow-x-hidden whitespace-nowrap">
                    </div>
                </div>
            </div>

            <div className="md:w-3/4 mt-6 md:mt-0">
                <div className="shadow-straight p-3 rounded-xl">
                    {/*    How to play*/}
                    Как играть
                </div>
            </div>
        </div>
    )
}

export default StartGame;
