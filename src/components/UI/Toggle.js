const Toggle = ({caption, onChange, state}) => {
    return (
        <div className="flex">
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input type="checkbox" name="toggle-foreign" id="toggle-foreign"
                       onChange={onChange}
                       checked={state}
                       className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                <label htmlFor="toggle-foreign"
                       className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"/>
            </div>
            <label htmlFor="toggle-foreign" className="text text-gray-700">{caption}</label>
        </div>
    )
}

export default Toggle
