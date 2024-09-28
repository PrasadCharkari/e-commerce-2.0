import React from 'react';
import { CartItem, Product } from '../types';

interface SingleProductCartProps {
    item: CartItem;
    onRemove: (id: string) => void;
}

function SingleProductCart({ item, onRemove }: SingleProductCartProps) {
    return (
        <div className="flex flex-col md:flex-row border-b-2 border-gray-300 mb-2">
            <div className="bg-slate-200 w-full md:w-1/4 p-5">
                <img
                    src={item.images}
                    alt={item.title}
                    className="max-h-[250px] w-auto m-auto"
                />
            </div>
            <div className="flex flex-col justify-center w-full md:w-2/4 p-5 space-y-1">
                <h1 className="text-3xl font-semibold">{item.title}</h1>

                <div className="flex align-middle items-start space-y-2">
                    <label htmlFor="quantity" className="font-medium text-md mt-3 mr-5 text-gray-500">Select Quantity:</label>
                    <select
                        id="quantity"
                        defaultValue={item.quantity}
                        className="border border-gray-300 rounded-md p-[6px] w-20"
                    >
                        {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>
                                {num}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="w-full md:w-1/4 p-5 flex flex-col justify-center space-y-2">
                <div className="flex justify-start">
                    <span className="text-xl font-semibold">₹</span>
                    <span className="text-4xl lg:text-5xl font-bold mb-1">{item.price}</span>
                </div>
                <span className="block mb-1 text-sm text-gray-600 font-semibold ml-3">Fast Delivery</span>
                <span className="text-green-600 font-bold text-sm ml-3">Stars {item.rating}</span>
                <button
                    onClick={() => onRemove(item.id)}
                    className="bg-red-700 hover:bg-red-800 text-white p-2 rounded w-full lg:w-[225px] mt-10"
                >
                    Remove from Cart
                </button>
            </div>
        </div>
    );
}

export default SingleProductCart;
