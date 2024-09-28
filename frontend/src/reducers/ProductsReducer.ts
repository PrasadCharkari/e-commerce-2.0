import { Product } from "../types";

export const productsReducer = (state: Product[], action: any) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return action.payload;

    case "SORT_PRODUCTS":
      switch (action.payload) {
        case "Price: Low to High":
          return [...state].sort((a, b) => a.price - b.price);
        case "Price: High to Low":
          return [...state].sort((a, b) => b.price - a.price);
        case "Fast Delivery":
          return [...state].filter((product) => product.fastDelivery);
        case "Sort by Rating":
          return [...state].sort((a, b) => b.rating - a.rating);
        default:
          return state;
      }

    default:
      return state;
  }
};
