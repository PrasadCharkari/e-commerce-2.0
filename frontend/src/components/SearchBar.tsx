import React from 'react';

function SearchBar() {
  return (
    <form action="/search" method="GET" className="flex flex-shrink-0 items-center border border-gray-300 rounded-md overflow-hidden">
      <input
        type="text"
        name="query"
        placeholder="Search products..."
        required
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
