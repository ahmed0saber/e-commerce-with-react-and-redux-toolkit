import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <Link to="/" className="website-title">
                <h1>e-commerce</h1>
            </Link>
            <Link to="/cart" className="btn">Cart</Link>
        </nav>
    )
}
