
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate,Link } from 'react-router'
import axios from 'axios'

function ProductDetailsPage() {

  const [Product, setProduct] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  async function getProduct() {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_SERVER_URL}/products/${id}`
    )

    setProduct(response.data)
  }

  useEffect(() => {
    getProduct()
  }, [id])

  async function deleteProduct(id) {
    await axios.delete(
      `${import.meta.env.VITE_BACK_END_SERVER_URL}/products/${id}`
    )

    navigate("/products")
  }

  return (
    <div>

      <h1>Products Details</h1>

      {Product ? (
        <>
          <h2>Title: {Product.title}</h2>
          <p>Description: {Product.description}</p>
          <p>Category: {Product.category}</p>
          <p>Price : {Product.price} BD</p>
          <button onClick={() => deleteProduct(id)}>
            Delete Product
          </button>

          <p> <Link to={`/products/${Product._id}/edit`}> Update </Link></p>
        </>
      ) : (
        <p>Loading....</p>
      )}

    </div>
  )
}

export default ProductDetailsPage
