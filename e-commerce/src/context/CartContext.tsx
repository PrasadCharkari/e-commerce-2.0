"use client";
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { cartReducer } from '../reducers/CartReducer';
import { CartItem } from '../types';

interface CartContextProps {
    cartItems: CartItem[];
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    dispatch: React.Dispatch<any>;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartItems, dispatch] = useReducer(cartReducer, []);

    const removeFromCart = (id: string) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    };

    const updateQuantity = (id: string, quantity: number) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    };

    return (
        <CartContext.Provider value={{ cartItems, removeFromCart, updateQuantity, dispatch }}>
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
