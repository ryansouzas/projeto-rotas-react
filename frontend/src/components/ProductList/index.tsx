import { useParams } from "react-router-dom";
import "./styles.css";

export default function ProductList() {
  const { category } = useParams();

  return (
    <div className="container mt-20">
      {category === "computers" && (
        <ul className="app-product-list">
          <li>Computador 1</li>
          <li>Computador 2</li>
          <li>Computador 3</li>
        </ul>
      )}

      {category === "electronics" && (
        <ul className="app-product-list">
          <li>Eletrônico 1</li>
          <li>Eletrônico 2</li>
          <li>Eletrônico 3</li>
        </ul>
      )}

      {category === "books" && (
        <ul className="app-product-list">
          <li>Livro 1</li>
          <li>Livro 2</li>
          <li>Livro 3</li>
        </ul>
      )}
    </div>
  );
}
