import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";

const ProductsEdit = (props) => {

    const { id } = useParams();
    const history = useHistory();
    const [formInfo, setFormInfo] = useState({
        title: "",
        price: "",
        description: ""
    })


    const changeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                console.log("response when trying to get one: ", res);
                setFormInfo(res.data)
            })
            .catch(err => console.log(err))
    }, [id]);

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}`, formInfo)
            .then(res => {
                console.log(res)
                history.push(`/`)
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Title</label><br />
                <input type="text" onChange={changeHandler} name="title" value={formInfo.title} />
            </div>

            <div>
                <label>Price</label><br />
                <input type="text" onChange={changeHandler} name="price" value={formInfo.price} />
            </div>

            <div>
                <label>Description</label><br />
                <input type="text" onChange={changeHandler} name="description" value={formInfo.description} />
            </div>
            
            <input onChange={changeHandler} type="submit" value="Edit" />
        </form>
    )
}

export default ProductsEdit;