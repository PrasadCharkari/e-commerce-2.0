"use client"
import React from 'react';
import { useCart } from '@/context/CartContext';
import SingleProductCart from '@/components/SingleProductCart';

function CartPage() {
    const { cartItems, dispatch, updateQuantity } = useCart();

    const handleRemove = (id: string) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    };


    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div className='bg-slate-100'>
            <div className='flex justify-between p-8 bg-slate-700 text-white text-2xl font-semibold sticky top-0 z-10'>
                <div className='hidden sm:block md:block'>Cart</div>
                <div className='lg:mr-10 sm:justify-end'>SubTotal ({cartItems.length} item{cartItems.length !== 1 ? 's' : ''}): ₹ {subtotal}</div>
            </div>
            <div className='overflow-y-auto p-1'>
                {cartItems.length > 0 ? (
                    cartItems.map(item => (
                        <SingleProductCart
                            key={item.id}
                            item={item}
                            onRemove={handleRemove}
                            onUpdateQuantity={updateQuantity}
                        />
                    ))
                ) : (
                    <div className="text-center text-gray-500">Your cart is empty.</div>
                )}
            </div>
        </div>
    );
}

export default CartPage;
