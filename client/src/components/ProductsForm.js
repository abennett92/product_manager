import React, { useState } from 'react';
import axios from 'axios';

const ProductsForm = (props) => {
    
    const [formInfo, setFormInfo] = useState({
        title: "",
        price: "",
        description: ""
    })


    const [formErrors, setFormErrors] = useState({
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

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', formInfo) 
            .then(res=> {
                    console.log(res)

                    if(res.data.errors) {
                        setFormErrors(res.data.errors)
                    } else {
                        props.setFormSubmit(!props.formSubmit)
                        setFormInfo({
                            title:"",
                            price:"",
                            description:""
                        })
                        setFormErrors({
                            title: "",
                            price: "",
                            description:""
                        })
                    }
            })
            .catch(err=>console.log(err))
        }

    return (
        <>
        <form onSubmit={onSubmitHandler}>

            <div>
                <label>Title</label><br/>
                <input type="text" onChange={changeHandler} name="title" value={formInfo.title}/>
                <p>{formErrors.title?.message}</p>
            </div>

            <div>
                <label>Price</label><br/>
                <input type="text" onChange={changeHandler} name="price" value={formInfo.price}/>
                <p>{formErrors.price?.message}</p>
            </div>

            <div>
                <label>Description</label><br/>
                <input type="text" onChange={changeHandler} name="description" value={formInfo.description}/>
                <p>{formErrors.description?.message}</p>
            </div> 

            <input onChange={changeHandler} type="submit" value="Create"/>
        </form>
        </>
    )
}

export default ProductsForm;