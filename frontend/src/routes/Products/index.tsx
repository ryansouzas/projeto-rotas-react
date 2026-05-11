import { Outlet } from "react-router-dom";
import ProductPage from "../../components/ProductPage";

export default function Products() {
  return (
    <main>
      <ProductPage />
      <Outlet />
    </main>
  );
}
