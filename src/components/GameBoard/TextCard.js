const TextCard = ({text, isSelected, disableChoose, canHover=true}) => {
    const generateClass = () => {
        let res = ""

        if (isSelected) {
            res += "bg-accent-light text-white "
        }

        if (disableChoose) {
            res += "opacity-70 "
        }

        if (canHover) {
            res += "cursor-pointer hover:scale-105 "
        }

        return res
    }

    return (
        <div className={"card flex text-center transition-all " + (generateClass())}>
            <span className="m-auto">
                {text}
            </span>
        </div>
    )
}

export default TextCard;
