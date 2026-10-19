
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router'
function AllProductPage() {

    const [products, setProducts] = useState([])

    async function getAllProducts() {

        const response = await axios.get(`${import.meta.env.VITE_BACK_END_SERVER_URL}/products`)
        setProducts(response.data)
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <div>
            <h1>All Products</h1>

            {products.map((oneProduct) =>
                <div key={oneProduct._id}>
                    <p>Title: {oneProduct.title}</p>
                    <p>Price: {oneProduct.price} BD</p>

                    <Link to={`/products/${oneProduct._id}`}>
                        See Details
                    </Link>
                </div>
            )}

        </div>
    )
}

export default AllProductPage
