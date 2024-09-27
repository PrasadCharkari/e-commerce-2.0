"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import '../app/globals.css';


const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };

    const handleClickOutside = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="relative">
            <div className="flex justify-between items-center p-5 bg-slate-700">
                <h1 className="text-2xl lg:text-4xl font-bold text-white">E-Commerce</h1>
                <button
                    onClick={toggleDropdown}
                    className="bg-sky-700 hover:bg-sky-800 text-white px-4 py-2 rounded  transition duration-200 w-[100px] border border-gray-400"
                >
                    Cart
                </button>
            </div>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-[250px] bg-gray-100 border-b border-gray-300 rounded shadow-lg z-10 ">
                    <div className="max-h-48 overflow-y-scroll scrollbar-hidden p-2">

                        <div className="p-2 hover:bg-gray-100 cursor-pointer">Product 1</div>
                        <div className="p-2 hover:bg-gray-100 cursor-pointer">Product 2</div>
                        <div className="p-2 hover:bg-gray-100 cursor-pointer">Product 3</div>
                        <div className="p-2 hover:bg-gray-100 cursor-pointer">Product 4</div>
                        <div className="p-2 hover:bg-gray-100 cursor-pointer">Product 5</div>
                        <div className="p-2 hover:bg-gray-100 cursor-pointer">Product 1</div>
                        <div className="p-2 hover:bg-gray-100 cursor-pointer">Product 2</div>
                        <div className="p-2 hover:bg-gray-100 cursor-pointer">Product 3</div>
                        <div className="p-2 hover:bg-gray-100 cursor-pointer">Product 4</div>
                        <div className="p-2 hover:bg-gray-100 cursor-pointer">Product 5</div>
                    </div>
                    <Link href="/cart" passHref>
                        <button className="w-full bg-blue-500  hover:bg-blue-600 text-white p-2 rounded-b transition duration-200 text-center">
                            Go to Cart
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Header;
