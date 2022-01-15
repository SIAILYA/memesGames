const SettingsPanel = () => {
    return (
        <div className="flex lg:shadow-straight lg:rounded-xl lg:bg-white lg:p-3 lg:mt-4">
            <button className="btn flex mx-auto">
                <span className="material-icons-outlined mr-2 my-auto">logout</span>
                <span className="my-auto">
                Выход
            </span>
            </button>
        </div>
    )
}

export default SettingsPanel;
