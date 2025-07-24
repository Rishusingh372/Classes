import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import '../mycss/style.css'

const TaskfackApi = () => {
    const API_URL = "http://localhost:3001/products";
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(API_URL);
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:");
            }
        };
       
        fetchProducts();
    }, []);
    // console.log(products);
  return (
    <>
        <h1>Taskfack API Products</h1>
        <div className="product-list">
            {products.map((product,i) => (
                <div key={i} className="product-item">
                    <h2>{product.title.substr(0,20)}</h2>
                    <p>{product.description.substr(0,200)}</p>
                    <p>Price: ${product.price}</p>
                    <img src={product.image} alt={product.title} />
                </div>
            ))}
        </div>
    </>
  )
}

export default TaskfackApi