import logo from "../assets/logo.svg"
import {NavLink} from "react-router-dom";

import "../styles/menu.css"

function Menu() {
    return (
        <div className="text-center md:flex text-left py-4">
            <NavLink to="/" className="block non-und">
                <img className="mx-auto md:mr-auto" src={logo} alt=""/>
            </NavLink>
            <div className="mt-3 md:mt-auto ml-auto">
                <NavLink to="/games" className={({isActive}) => isActive ? "text-purpledark nav-link" : "nav-link"}>
                    Игры
                </NavLink>
                <NavLink to="/faq" className={({isActive}) => isActive ? "text-purpledark nav-link" : "nav-link"}>
                    Как играть?
                </NavLink>
                <NavLink to="/support" className={({isActive}) => isActive ? "text-purpledark nav-link" : "nav-link"}>
                    Поддержать
                </NavLink>
            </div>
        </div>
    )
}

export default Menu;
