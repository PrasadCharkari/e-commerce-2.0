"use client"
import React, { useState } from 'react';

function ProductsSorter() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col flex-shrink-0 md:flex-row items-center  rounded-md overflow-hidden justify-center mt-5 mb-5 ">

            <div className="sm:hidden">
                <button
                    onClick={toggleDropdown}
                    className="w-full bg-gray-300 text-left p-2 focus:outline-none rounded"
                >
                    Sort Products
                </button>
                {isOpen && (
                    <div className="absolute bg-gray-100 border border-gray-300 shadow-md w-[]100px] z-10">
                        {["Price: Low to High", "Price: High to Low", "Fast Delivery", "Sort by Rating"].map((option, index) => (
                            <div key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="hidden sm:flex space-x-4 p-2">
                {["Price: Low to High", "Price: High to Low", "Fast Delivery", "Sort by Rating"].map((option, index) => (
                    <div key={index} className="p-3 bg-sky-700 text-white   rounded hover:bg-sky-800 cursor-pointer">
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsSorter;
