import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductsAll = (props) => {
    
    const [ allProducts, setAllProducts ] = useState([]); 
    const [ deleteProductManger, setdeleteProductManger ] = useState(false)


    useEffect(() => { 
        axios.get('http://localhost:8000/api/product')
        .then(res=>{
            setAllProducts(res.data)
            console.log("Response: all products ", res.data)
        })
        .catch(err=>console.log(err))
    },[props.formSubmit, deleteProductManger]);


    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                console.log(res) 
                setdeleteProductManger(!deleteProductManger)
            })
            .catch(err => console.error(err));
    }


    return (
        <div className="mt-5">
            <h1>All Products:</h1>
            {allProducts.map((product, i)=>{
                return <p key = {i}>
                    <Link to ={`/product/${product._id}`}>{product.title}</Link>
                    <Link to = {`/product/edit/${product._id}`}>Edit</Link><button onClick={(e)=>deleteProduct(e, product._id)}>Delete</button></p>
            })}
        </div>
    )
}

export default ProductsAll;