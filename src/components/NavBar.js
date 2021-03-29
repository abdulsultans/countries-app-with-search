import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-warning justify-content-between">
      <div>
        <h5 className="text-white">COUNTRY <span className="span bg-danger">FARM</span></h5>
      </div>
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link text-white">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/countries" className="nav-link text-white">
            Countries
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
