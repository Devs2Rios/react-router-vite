import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul className="mx-auto font-medium flex items-center justify-center gap-3 p-4 list-none list-inside">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined} aria-current="page">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/artists" className="block" aria-current="page">Artists</NavLink>
                </li>
            </ul>
        </nav>
    );
}