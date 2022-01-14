export default ({img, caption, description, isActive}) => {
    return (
        <div className={"slide " + (isActive ? "h-80 md:h-72 lg:h-96 xl:h-80" : "h-0")}>
            <img src={img} className="w-2/3 pointer-events-none aspect-video md:aspect-square object-cover md:w-2/3 xl:w-1/2 mx-auto rounded-xl shadow-straight" alt=""/>
            <h3 className="text-accent-light font-semibold text-lg mt-3">{caption}</h3>
            <div>
                {description}
            </div>
        </div>
    )
}
