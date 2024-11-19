

"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { FaCartShopping } from 'react-icons/fa6';

const Header: React.FC = () => {
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
    const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
    const { cartItems } = useCart();
    const router = useRouter();

    const toggleCartDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setIsCartOpen(!isCartOpen);
        setIsProfileOpen(false);
    };

    const toggleProfileDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setIsProfileOpen(!isProfileOpen);
        setIsCartOpen(false);
    };

    const handleClickOutside = () => {
        if (isCartOpen) setIsCartOpen(false);
        if (isProfileOpen) setIsProfileOpen(false);
    };

    useEffect(() => {
        if (typeof document !== "undefined") {
            document.addEventListener('click', handleClickOutside);
            return () => {
                document.removeEventListener('click', handleClickOutside);
            };
        }
    }, [isCartOpen, isProfileOpen]);

    const totalItems = cartItems.reduce((total: number, item: { quantity: number }) => total + item.quantity, 0);

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push("/"); // Redirect to home or login page as needed
    };

    return (
        <div className="relative">
            <div className="flex justify-between items-center p-5 bg-slate-700">
                <h1 className="text-2xl lg:text-4xl font-bold text-white">E-Commerce</h1>

                <div className="flex space-x-4 items-center">
                    <button
                        onClick={toggleCartDropdown}
                        className="bg-sky-700 hover:bg-sky-800 text-white px-4 py-2 rounded transition duration-200 w-[100px] border border-gray-400"
                    >
                        <div className='flex justify-center'>
                            <span className='mt-1 mr-2'><FaCartShopping /></span>
                            <span>{totalItems > 0 ? totalItems : 0}</span>
                        </div>
                    </button>

                    <button onClick={toggleProfileDropdown} className="text-white hover:text-gray-300">
                        <FaUserCircle size={28} />
                    </button>
                </div>
            </div>

            {isCartOpen && (
                <div className="absolute right-20 mt-2 w-[250px] bg-gray-100 border-b border-gray-300 rounded shadow-lg z-10">
                    <div className="max-h-48 overflow-y-scroll scrollbar-hidden p-2">
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div key={item.id} className="p-2 hover:bg-gray-100 cursor-pointer">
                                    {item.title} (Qty: {item.quantity})
                                </div>
                            ))
                        ) : (
                            <div className="p-2 text-gray-500">No items in cart</div>
                        )}
                    </div>
                    <Link href="/Cart" passHref>
                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-b transition duration-200 text-center">
                            Go to Cart
                        </button>
                    </Link>
                </div>
            )}

            {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-[150px] bg-gray-100 border-b border-gray-300 rounded shadow-lg z-10">
                    <Link href="/admin/dashboard" passHref>
                        <button className="w-full text-left p-2 hover:bg-gray-200 transition duration-200">Dashboard</button>
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="w-full text-left p-2 hover:bg-gray-200 transition duration-200"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
