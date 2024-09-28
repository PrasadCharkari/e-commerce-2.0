import { Product } from "../types";

export const productsReducer = (
  state: { products: Product[]; searchQuery: string },
  action: any
) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };

    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };

    case "SORT_PRODUCTS":
      return state;

    default:
      return state;
  }
};
