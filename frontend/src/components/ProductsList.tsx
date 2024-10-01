"use client";
import React, { useContext, useState } from "react";
import SingleProductHome from "./SingleProductHome";
import { useProducts } from "../context/ProductsContext";

function ProductsList() {
    const { products, searchQuery } = useProducts();
    const [page, setPage] = useState(3);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="overflow-hidden">
                {filteredProducts.length > 0 ? (
                    filteredProducts
                        .slice(page * 5 - 5, page * 5)
                        .map((product) => (
                            <SingleProductHome key={product.id} product={product} />
                        ))
                ) : (
                    <p className="text-center">No products available.</p>
                )}
            </div>
            {products.length > 0 && (
                <div className="flex justify-center py-4 my-4 flex-wrap">
                    <span
                        onClick={() => setPage(page - 1)}
                        className={`px-4 py-2 md:px-5 md:py-3 border border-gray-400 cursor-pointer transition duration-200 
                  ${page > 1 ? "" : "opacity-50 cursor-not-allowed"}`}
                        aria-disabled={page <= 1}
                        title={page > 1 ? "Previous Page" : "No Previous Page"}
                    >
                        ◀
                    </span>

                    <div className="flex space-x-1">
                        {[...Array(Math.ceil(products.length / 5))].map((_, i) => (
                            <span
                                key={i}
                                className={`px-4 py-2 md:px-5 md:py-3 border border-gray-400 cursor-pointer transition duration-200 
                      ${page === i + 1 ? "bg-gray-300 font-bold border-2 border-gray-600" : ""} text-sm md:text-base`}
                                onClick={() => setPage(i + 1)}
                                title={`Page ${i + 1}`}
                            >
                                {i + 1}
                            </span>
                        ))}
                    </div>

                    <span
                        onClick={() => setPage(page + 1)}
                        className={`px-4 py-2 md:px-5 md:py-3 border border-gray-400 cursor-pointer transition duration-200 
                  ${page < Math.ceil(products.length / 5) ? "" : "opacity-50 cursor-not-allowed"}`}
                        aria-disabled={page >= Math.ceil(products.length / 5)}
                        title={page < Math.ceil(products.length / 5) ? "Next Page" : "No Next Page"}
                    >
                        ▶
                    </span>
                </div>
            )}


        </>
    );
}

export default ProductsList;
