import React from "react";
import { useCart } from '../context/CartContext';
import { Product } from '../types';

interface ProductProps {
    product: Product;
}

function SingleProductHome({ product }: ProductProps) {
    const { dispatch } = useCart();

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
    };

    return (
        <div className="flex flex-col md:flex-row border-b-2 border-gray-300 mb-8">
            <div className="bg-slate-200 w-full md:w-1/4 p-5">
                <img
                    src={product.images[0]} // Use the first image
                    alt={product.title}
                    className="max-h-[250px] w-auto m-auto"
                />
            </div>
            <div className="flex flex-col justify-center w-full md:w-2/4 p-5">
                <h1 className="text-3xl lg:text-4xl font-semibold">{product.title}</h1>
                <p className="text-gray-400 mt-7 mb-2 font-semibold text-md lg:text-lg">
                    {product.description}
                </p>
                <span className="text-green-600 font-bold">Stars {product.rating}</span>
            </div>
            <div className="w-full md:w-1/4 p-5 flex flex-col justify-center">
                <div className="flex justify-start">
                    <span className="text-xl font-semibold">₹</span>
                    <span className="text-4xl lg:text-5xl font-bold mb-1">{product.price}</span>
                </div>
                <span className="block mb-1 text-sm text-gray-600 font-semibold">
                    {product.fastDelivery ? 'Fast Delivery' : 'Standard Delivery'}
                </span>
                <button onClick={handleAddToCart} className="bg-sky-700 hover:bg-sky-800 text-white p-2 rounded w-full lg:w-[250px] mt-10">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default SingleProductHome;
