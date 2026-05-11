import "./styles.css";
import homeIcon from "../../assets/home.svg";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className=" app-header">
      <nav className="container app-nav app-nav-header">
        <ul>
          <li>
            <NavLink to="/home">Início</NavLink>
          </li>

          <li>
            <NavLink to="/products">Produtos</NavLink>
          </li>

          <li>
            <NavLink to="/about">Sobre Nós</NavLink>
          </li>
        </ul>
        <Link to="/home">
          <img src={homeIcon} alt="Home" />
        </Link>
      </nav>
    </header>
  );
}
