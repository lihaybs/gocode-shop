import './ProductPage.css'
import { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import Product from '../Product/Product';



export default function ProductPage() {

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
            })
    }, []);
    let { id } = useParams();

    return (
        <div style={{ height: '200px', width: '200px' }}>
            <Product key={id} img={product.image} title={product.title} price={product.price} id={product.id} counter={product.counter} updateCart={product.updateCart} />
            <Link to={"/"}>Back</Link>
        </div>
    )
}
