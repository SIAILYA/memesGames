const TextCard = ({text, isSelected, disableChoose, className, canHover=true, index, onClick}) => {
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
        //FIXME: Мерцание карт при появлении
        <div onClick={disableChoose ? () => {} : onClick} className={"card flex text-center transition-all " + (generateClass()) + className} style={{animationDelay: index * 200 + "ms"}}>
            <span className="m-auto">
                {text}
            </span>
        </div>
    )
}

export default TextCard;
