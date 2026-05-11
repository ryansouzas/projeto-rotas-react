import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ClientSite from "./routes";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Products from "./routes/Products";
import About from "./routes/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientSite />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
