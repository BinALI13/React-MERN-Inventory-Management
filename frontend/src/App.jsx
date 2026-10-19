import { Routes, Route } from "react-router";

import Navbar from "./components/NavBar";
import Homepage from "./pages/HomePage";
import AllProductPage from "./pages/AllProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CreateProductPage from "./pages/CreateProductPage";
import UpdateProductPage from "./pages/UpdateProductPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/products" element={<AllProductPage/>} />
        <Route path="/products/create" element={<CreateProductPage/>} />
        <Route path="/products/:id" element={<ProductDetailsPage/>} />
        <Route path="/products/:id/edit" element={<UpdateProductPage/>} />
      </Routes>
    </>
  );
}

export default App;