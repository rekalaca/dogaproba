import { Outlet, Link } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <div id="navbar">
                <a href="/" id="logo">Gyakorlás a dolgozatra...</a>
                <div id="navbar-right">
                    <a className="active" href="/">Főlap</a>
                    <a href="/Haromszogek">Háromszögek</a>
                    <a href="/Osztaly">Osztály névsor</a>
                </div>
            </div>


            <Outlet />
        </>
    )
};

export default Menu;