import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import axios from 'axios';

const ProductsShow = (props) => {

    const [productInfo, setProductInfo] = useState({});
    const { id } = useParams();
    const history = useHistory();


    useEffect (() => {
    axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res => { 
            console.log("response when trying to get one: ", res);
            setProductInfo(res.data)
            })
            .catch(err => console.log(err))
        },[id]);

        const deleteProduct = (id) => {
            axios.delete(`http://localhost:8000/api/product/${id}`)
                .then(res => {
                    console.log(res) 
                    history.push('/');
                })
                .catch(err => console.error(err));
        }

    return (
        <div> 
            <h2> Products Information </h2>
            <p>Title: {productInfo.title}</p>
            <p>Price: {productInfo.price}</p>
            <p>Description: {productInfo.description}</p>
            <button onClick={(e)=>{deleteProduct(productInfo._id)}}>Delete</button>
        </div>
    );
};

export default ProductsShow;