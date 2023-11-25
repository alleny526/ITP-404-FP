import { NavLink } from "react-router-dom";
import { Search } from "./Search";

export default function Nav() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          MyAnime
        </NavLink>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/mycollection" className="nav-link">
              My Collection
            </NavLink>
          </li>
        </ul>
        <Search />
      </div>
    </nav>
  );
}
