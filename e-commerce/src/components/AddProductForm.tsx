"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { useRouter } from 'next/navigation';

const AddProductForm: React.FC = () => {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState<string>("");
    const [rating, setRating] = useState<string>("");
    const [images, setImages] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [fastDelivery, setFastDelivery] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const productData = {
            title,
            description,
            category,
            price: Number(price),
            rating: Number(rating),
            images: images.split(",").map((img) => img.trim()),
            thumbnail,
            fastDelivery,
        };

        try {
            const res = await fetch("/api/products/addProduct", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(productData),
            });

            if (!res.ok) {
                throw new Error("Network response was not ok");
            }

            const addedProduct = await res.json();
            console.log("Product added:", addedProduct);

            toast.success("Product successfully added!");


            setTitle("");
            setDescription("");
            setCategory("");
            setPrice("");
            setRating("");
            setImages("");
            setThumbnail("");
            setFastDelivery(false);
        } catch (error) {
            console.error("Error adding product:", error);
            toast.error("Failed to add product.");
        }
    };

    const handleBackClick = () => {
        router.push('/');
    };
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-300 rounded-lg shadow-lg border border-gray-400 text-gray-700">
            <h2 className="text-2xl font-bold text-center mb-6 text-sky-900">Add New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 "
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="number"
                    placeholder="Rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    required
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="text"
                    placeholder="Image Url"
                    value={images}
                    onChange={(e) => setImages(e.target.value)}
                    required
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="text"
                    placeholder="Thumbnail URL"
                    value={thumbnail}
                    onChange={(e) => setThumbnail(e.target.value)}
                    required
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <label className="flex items-center text-sky-900">
                    <input
                        type="checkbox"
                        checked={fastDelivery}
                        onChange={(e) => setFastDelivery(e.target.checked)}
                        className="mr-2"
                    />
                    Fast Delivery
                </label>
                <button
                    type="submit"
                    className="w-full p-2 bg-sky-700 text-white rounded-md hover:bg-sky-800 transition duration-200"
                >
                    Add Product
                </button>
            </form>
            <ToastContainer />
            <button
                onClick={handleBackClick}
                className=" text-white bg-sky-700 rounded-md hover:bg-sky-800 transition duration-200 text-sm md:text-base h-10 w-full my-2"
            >
                Back to Homepage
            </button>
        </div>
    );
};

export default AddProductForm;
