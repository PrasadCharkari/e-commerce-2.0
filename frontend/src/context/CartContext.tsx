"use client";
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { cartReducer } from '../reducers/CartReducer';
import { CartItem } from '../types';

interface CartContextProps {
    cartItems: CartItem[];
    dispatch: React.Dispatch<any>;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartItems, dispatch] = useReducer(cartReducer, []);

    return (
        <CartContext.Provider value={{ cartItems, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
