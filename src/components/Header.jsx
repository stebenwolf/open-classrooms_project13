// @ts-nocheck
import { NavLink } from "react-router-dom";
import logo from '../assets/img/argentBankLogo.png';

import { UserHeader } from "../features/userHeader";

function Header() {

    return (
        <div className="Header">
            <nav className="main-nav" >
                <NavLink to="/" className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>

                <UserHeader />
            </nav>
        </div>
    )
}

export default Header;