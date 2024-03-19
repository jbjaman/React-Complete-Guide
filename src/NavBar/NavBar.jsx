import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <div className="flex items-center justify-center gap-3">
                <NavLink to="/"><button className="border-l-2 border-emerald-400 px-2  hover:font-semibold hover:text-emerald-400">Home</button></NavLink>
                <NavLink to="/react-basic"><button className="border-l-2 border-emerald-400 px-2  hover:font-semibold hover:text-emerald-400">React Basic</button></NavLink>
            </div>

        </>
    );
};

export default NavBar;