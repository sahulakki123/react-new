import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductPage from "./ProductPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
