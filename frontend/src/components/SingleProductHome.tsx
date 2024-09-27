import React from "react";

function SingleProductHome() {
    return (
        <div className="flex flex-col md:flex-row border-b-2 border-gray-300 mb-8">
            <div className="bg-slate-200 w-full md:w-1/4 p-5">
                <img
                    src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
                    alt="Green Box"
                    // className="w-full h-auto"
                    className="max-h-[250px] w-auto m-auto"
                />
            </div>
            <div className="flex flex-col justify-center w-full md:w-2/4 p-5">
                <h1 className="text-3xl lg:text-4xl font-semibold">Essence Mascara Lash Princess</h1>
                <p className="text-gray-400 mt-7 mb-2 font-semibold text-md lg:text-lg">
                    The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula
                </p>
                <span className="text-green-600 font-bold">Stars 3</span>
            </div>
            <div className="w-full md:w-1/4 p-5 flex flex-col justify-center">
                <div className="flex justify-start">
                    <span className="text-xl font-semibolds">₹</span>
                    <span className="text-4xl lg:text-5xl font-bold mb-1">1000</span>


                </div>
                <span className="block mb-1 text-sm text-gray-600 font-semibold">
                    Fast Delivery
                </span>
                <button className="bg-sky-700 hover:bg-sky-800 text-white p-2 rounded w-full lg:w-[250px]  mt-10">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default SingleProductHome;
