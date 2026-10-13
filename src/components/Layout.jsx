import { NavLink, Link } from "react-router-dom";
import { useStudents } from "../context/StudentContext";

export default function Layout({ children }) {
  const { favourites } = useStudents();
  return (
    <div className="app-shell">
      <header className="topbar">
        <Link className="brand" to="/">
          <span className="brand-mark">✦</span>
          <span>Campus<span className="brand-light">List</span></span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Students</NavLink>
          <NavLink to="/favourites" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Favourites <span className="nav-count">{favourites.length}</span>
          </NavLink>
        </nav>
        <div className="profile-chip"><span className="profile-avatar">JS</span><span className="profile-name">Student Portal</span></div>
      </header>
      <main className="main-content">{children}</main>
      <footer className="footer"><span>CampusList</span><span>Made for your campus community ✦</span></footer>
    </div>
  );
}