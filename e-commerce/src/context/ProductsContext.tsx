"use client"
import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { productsReducer } from '../reducers/ProductsReducer';
import axios from 'axios';
import { Product } from '../types';



interface ProductsContextProps {
    products: Product[];
    searchQuery: string;
    dispatch: React.Dispatch<any>;
}

const ProductsContext = createContext<ProductsContextProps | undefined>(undefined);

export const ProductsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(productsReducer, { products: [], searchQuery: '', sortOption: '' });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products/getProducts');
                console.log(response.data);
                dispatch({ type: 'SET_PRODUCTS', payload: response.data });
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <ProductsContext.Provider value={{ products: state.products, searchQuery: state.searchQuery, dispatch }}>
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

export default ProductsContext;