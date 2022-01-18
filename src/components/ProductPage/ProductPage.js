import './ProductPage.css'
import React from 'react'
import { useParams, Link } from "react-router-dom";


export default function ProductPage() {
    let { id } = useParams();
    return (
        <div>
            <Link to={"/"}>{id}</Link>
        </div>
    )
}
