import { Product } from "../types";

interface State {
  products: Product[];
  searchQuery: string;
  sortOption: string;
}

type Action =
  | { type: "SET_PRODUCTS"; payload: Product[] }
  | { type: "SET_SEARCH_QUERY"; payload: string }
  | { type: "SORT_PRODUCTS"; payload: string };

export const productsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };

    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };

    case "SORT_PRODUCTS":
      const sortedProducts = [...state.products].sort((a, b) => {
        switch (action.payload) {
          case "Price: Low to High":
            return a.price - b.price;
          case "Price: High to Low":
            return b.price - a.price;
          case "Fast Delivery":
            return a.fastDelivery === b.fastDelivery
              ? 0
              : a.fastDelivery
              ? -1
              : 1;
          case "Sort by Rating":
            return b.rating - a.rating;
          default:
            return 0;
        }
      });
      return { ...state, products: sortedProducts };
    default:
      return state;
  }
};
