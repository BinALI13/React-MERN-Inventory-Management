
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function CreateProductPage() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    quantity: ""
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await axios.post(
      `${import.meta.env.VITE_BACK_END_SERVER_URL}/products`,
      formData
    );

    navigate("/products");
  }

  return (
    <div>
      <h1>Create Product</h1>

      <form onSubmit={handleSubmit}>

        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="electronics">Electronics</option>
          <option value="food">Food</option>
          <option value="clothing">Clothing</option>
          <option value="furniture">Furniture</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          name="price"
          min="0.1"
          step="any"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <label htmlFor="quantity">Quantity:</label>
        <input
          id="quantity"
          type="number"
          name="quantity"
          min="0"
          step="1"
          value={formData.quantity}
          onChange={handleChange}
          required
        />

        <button type="submit">Create Product</button>

      </form>
    </div>
  );
}

export default CreateProductPage;
