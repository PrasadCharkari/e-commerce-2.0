"use client";
import React, { useContext } from 'react';
import SingleProductHome from './SingleProductHome';
import { useProducts } from '../context/ProductsContext';


function ProductsList() {
    const { products, searchQuery } = useProducts();


    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='overflow-hidden'>
            {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                    <SingleProductHome key={product.id} product={product} />
                ))
            ) : (
                <p className="text-center">No products available.</p>
            )}
        </div>
    );
}

export default ProductsList;
