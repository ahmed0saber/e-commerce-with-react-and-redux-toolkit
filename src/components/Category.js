import React, {useState, useEffect} from 'react'
import Product from './Product'

export default function Category(props) {
    const [productsData, setProductsData] = useState([])
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        const apiUrl = `https://ecom-fake-api.onrender.com/${props.data.path}`
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            setProductsData(data)
            setLoaded(true)
        })
    }, [])
    return (
        <>
            {loaded ? <section className='category-section'>
                <div className='category-header'>
                    <h2>{props.data.name}</h2>
                </div>
                <div className='category-products'>
                    {productsData.map((productData, index) => <Product key={index} data={productData}/>)}
                </div>
            </section>
            : <></>}
        </>
    )
}
