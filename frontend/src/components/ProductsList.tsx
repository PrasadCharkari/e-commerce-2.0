"use client";
import React from 'react';
import SingleProductHome from './SingleProductHome';
import { useProducts } from '../context/ProductsContext';



function ProductsList() {
    const { products } = useProducts();

    return (
        <div className='overflow-hidden'>
            {products.length > 0 ? (
                products.map(product => (
                    <SingleProductHome key={product.id} product={product} />
                ))
            ) : (
                <p className="text-center">No products available.</p>
            )}
        </div>
    );
}

export default ProductsList;
