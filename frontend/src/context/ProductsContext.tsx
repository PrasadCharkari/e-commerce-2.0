"use client"
import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { productsReducer } from '../reducers/ProductsReducer';
import { Product } from '../types';
import axios from 'axios';

interface ProductsContextProps {
    products: Product[];
    dispatch: React.Dispatch<any>; // Ensure dispatch is exposed
}

const ProductsContext = createContext<ProductsContextProps | undefined>(undefined);

export const ProductsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [products, dispatch] = useReducer(productsReducer, []);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/data.json');
                dispatch({ type: 'SET_PRODUCTS', payload: response.data });
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <ProductsContext.Provider value={{ products, dispatch }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error('useProducts must be used within a ProductsProvider');
    }
    return context;
};
