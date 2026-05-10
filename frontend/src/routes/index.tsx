import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function ClientSite() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
