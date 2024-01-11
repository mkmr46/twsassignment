import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Product() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product A', price: 20 },
        { id: 2, name: 'Product B', price: 30 },
        { id: 3, name: 'Product C', price: 40 },
    ]);
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('product')) || []);

    const addToCart = (product) => {
        
        if (!cartItems.some((val) => val.id === product.id)) {
          
            const updatedCartItems = [...cartItems, product];
         
            setCartItems(updatedCartItems);
            localStorage.setItem('product', JSON.stringify(updatedCartItems));
        }
    };

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <div>Product: {product.name}</div>
                    <div>Price: {product.price}</div>
                    <button
                        disabled={cartItems.some((val) => val.id === product.id)}
                        onClick={() => addToCart(product)}
                    >
                        Add to cart
                    </button>
                </div>
            ))}
            <br></br>
            <button onClick={() => navigate('/checkout')}>Go to cart</button>
        </div>
    );
}
