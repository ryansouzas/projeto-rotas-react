import "./styles.css";
import homeIcon from "../../assets/home.svg";

export default function Header() {
  return (
    <header className=" app-header">
      <nav className="container app-nav app-nav-header">
        <ul>
          <li>Início</li>
          <li>Produtos</li>
          <li>Sobre Nós</li>
        </ul>
        <img src={homeIcon} alt="Home" />
      </nav>
    </header>
  );
}
