import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/products">All Products</Link> |{" "}
      <Link to="/products/create">Create Product</Link>
    </nav>
  );
}

export default Navbar;