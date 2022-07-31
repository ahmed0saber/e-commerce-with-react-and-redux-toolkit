import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { removeFromCart, increaseAmount, decreaseAmount } from '../redux/cartSlice'

export default function Cart() {
    const [productsData, setProductsData] = useState({})
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        const apiUrl = `https://ecom-fake-api.onrender.com/products`
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            setProductsData(data)
            setLoaded(true)
        })
    }, [])
    let products = useSelector(state => state.cart.products)
    const dispatch = useDispatch()
    const handleIncreaseAmount = (productId) => {
        dispatch(increaseAmount(productId))
    }
    const handleDecreaseAmount = (productId) => {
        dispatch(decreaseAmount(productId))
    }
    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId))
    }
    const showImage = (e) => {
        e.target.style.opacity = 1
    }
    const getTotalCost = () => {
        let cost = 0
        for(let productId in products){
            cost += productsData[productId].price * products[productId]
        }
        return cost
    }
    return (
        <>
            {loaded ? <>
                <h2 className="total-cost-title">Total Cost: {getTotalCost()}</h2>
                <div className="cart-products-container">
                {Object.keys(products).map((productId, index) => <div className="cart-product" key={index}>
                    <div className="img-container">
                        <div className="image-loader">
                            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        </div>
                        <img src={productsData[productId].picture} alt="product" onLoad={showImage}/>
                    </div>
                    <div className="info-container">
                        <div className="name-and-price">
                            <h3>{productsData[productId].name}</h3>
                            <p>{productsData[productId].price}$</p>
                        </div>
                        <div className="controls">
                            <button style={{backgroundColor:"#2bb22b"}} onClick={() => handleIncreaseAmount(productId)}>Increase</button>
                            <button style={{backgroundColor:"#2b2bb2"}} onClick={() => handleDecreaseAmount(productId)}>Decrease</button>
                            <button style={{backgroundColor:"#b22b2b"}} onClick={() => handleRemoveFromCart(productId)}>Remove</button>
                        </div>
                        <div className="amount-and-cost">
                            <p>Amount:{products[productId]}</p>
                            <p>Total Cost:{products[productId] * productsData[productId].price}</p>
                        </div>
                    </div>
                </div>)}
            </div></> : <></>}
        </>
    )
}
