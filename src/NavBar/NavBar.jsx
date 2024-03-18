import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <div className="flex items-center justify-center gap-3">
                <NavLink to="/"><button className="border-l-2 border-emerald-400 px-2  text-sm hover:font-semibold">Home</button></NavLink>
                <NavLink to="/react-basic"><button className="border-l-2 border-emerald-400 px-2  text-sm hover:font-semibold">React Basic</button></NavLink>
            </div>

        </>
    );
};

export default NavBar;