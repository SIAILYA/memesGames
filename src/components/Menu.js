import {NavLink, useLocation} from "react-router-dom";

import "../styles/menu.css"
import {useRef} from "react";

const blockNavigationPaths = ["/gameboard", "/lobby"]

function Menu() {
    const navigation = useLocation()

    return (
        <div className="text-center md:flex text-left py-4">
            <NavLink to="/" className={"block non-und " + (blockNavigationPaths.indexOf(navigation.pathname) !== -1 ? "pointer-events-none" : "")}>
                <span
                    className="font-extrabold text-transparent bg-clip-text bg-gradient-accent mx-auto db:mr-auto text-4xl font-bold">MemesGames.ru</span>
                {/*<img className="mx-auto md:mr-auto" src={logo} alt=""/>*/}
            </NavLink>
            <div className={"mt-3 md:mt-auto ml-auto " + (blockNavigationPaths.indexOf(navigation.pathname) !== -1 ? "hide-navigation" : "")}>
                {/*TODO: Сделать генерацию через цикл*/}
                <NavLink to="/gameboard" className={({isActive}) => isActive ? "text-accent-dark nav-link" : "nav-link"}>
                    Игры
                </NavLink>
                <NavLink to="/faq" className={({isActive}) => isActive ? "text-accent-dark nav-link" : "nav-link"}>
                    Как играть?
                </NavLink>
                <NavLink to="/support" className={({isActive}) => isActive ? "text-accent-dark nav-link" : "nav-link"}>
                    Поддержать
                </NavLink>
            </div>
        </div>
    )
}

export default Menu;
