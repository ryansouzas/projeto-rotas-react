import { NavLink } from "react-router-dom";
import "./styles.css";

export default function ProductPage() {
  return (
    <nav>
      <ul className="container mt-20 app-nav-products">
        <li>
          <NavLink to="computers">Computadores</NavLink>
        </li>

        <li>
          <NavLink to="electronics">Eletrônicos</NavLink>
        </li>

        <li>
          <NavLink to="books">Livros</NavLink>
        </li>
      </ul>
    </nav>
  );
}
