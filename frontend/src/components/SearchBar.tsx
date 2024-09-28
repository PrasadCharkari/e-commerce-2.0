"use client";
import React, { useContext } from 'react';
import { useProducts } from '../context/ProductsContext';

function SearchBar() {
  const { dispatch } = useProducts();

  const handleChange = (event: any) => {
    const query = event.target.value;
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-shrink-0 items-center border border-gray-300 rounded-md overflow-hidden">
      <input
        type="text"
        name="query"
        onChange={handleChange}
        placeholder="Search products..."
        className="flex-grow p-2 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-sky-700 text-white px-4 py-2 hover:bg-sky-800 transition duration-200"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
