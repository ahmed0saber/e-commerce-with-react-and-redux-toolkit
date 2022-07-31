import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { addToCart } from '../redux/cartSlice'

export default function Product(props) {
    const dispatch = useDispatch()
    const showImage = (e) => {
        e.target.style.opacity = 1
    }
    const handleAddToCart = (productId) => {
        dispatch(addToCart(productId))
    }
    return (
        <div className="product-card">
            <div className="product-pic-container">
                <div className="image-loader">
                    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
                <img src={props.data.picture} alt="product" onLoad={showImage}/>
            </div>
            <div className="product-details">
                <h3>{props.data.name}</h3>
                <div className="price-container">
                    <button onClick={() => handleAddToCart(props.data.id)}>Add To Cart</button>
                    <span>{props.data.price}$</span>
                </div>
            </div>
        </div>
    )
}
